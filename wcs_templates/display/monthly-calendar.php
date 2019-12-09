<?php

/** Template: Display -> Monthly Calendar */

?>
<div class="wcs-timetable wcs-timetable--monthly-calendar" :class="calendarClasses">
	<div class="wcs-timetable__main-col">
		<div class="wcs-calendar__header">
			<div class="wcs-calendar-nav" :class="!loading_process ? 'wcs-modal-call' : ''">
				<span v-if="isNavVisible('prev')" class="wcs-calendar-nav-prev" v-on:click.prevent="subtractMonth()"><i class="ti-angle-left"></i> {{options.label_mth_prev}}</span>
			</div>
			<h3 v-text="getCurrentMonth"></h3>
			<div class="wcs-calendar-nav" :class="!loading_process ? 'wcs-modal-call' : ''">
				<span v-if="isNavVisible('next')" class="wcs-calendar-nav-next" v-on:click.prevent="addMonth()">{{options.label_mth_next}} <i class="ti-angle-right"></i> </span>
			</div>
		</div>
		<div class="wcs-timetable__monthly-calendar wcs-table">
			<div class="wcs-spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect5"></div></div>
			<div class="wcs-table-tr wcs-table-thead">
				<div v-for="day in week" v-show="isWeekday(day.day_num, true)" class="wcs-day wcs-table-td" :class="'wcs-day--' + day.day_num" :data-day="day_name(day.day_num).slice(0,1)">
					<h4 class="wcs-day__title">{{day_name(day.day_num)}}</h4>
				</div><!-- .wcs-day -->
			</div>
            <template v-for="week in days_chunks">
                <div class="wcs-table-tr wcs-week">
                    <div v-for="day in week" class="wcs-table-td wcs-date" v-show="isWeekday(day)" :class="dayClasses(day)" v-on:click="selectDay(day, $event)"><span>{{ day.date | moment('D', false) }}</span></div>
                </div>
                <div v-if="isAgendaInside(week)" class="wcs-table-tr--full">
                    <div class="wcs-table-td--full">
                        <div v-if="selectedDay" class="wcs-day-agenda">
                            <template  v-if="getFilteredCalendarEvents(selectedDay.events).length > 0">
                                <div v-for="event in getFilteredCalendarEvents(selectedDay.events)" class="wcs-class" :class="event | eventCSS">
                                    <div v-if="event.thumbnail" class='wcs-class__image wcs-modal-call' :style='"background-image: url(" + event.thumbnail +")"' v-on:click="openModal( event, options, $event )"></div>
                                    <div class="wcs-class__inner">
                                        <div class="wcs-class__time-duration">
                                            <span v-html="starting_ending(event)"></span>
                                            <span v-if="filter_var(options.show_duration)" class='wcs-class__duration wcs-addons--pipe'>{{event.duration}}</span>
                                        </div>
                                        <h3 class="wcs-class__title wcs-modal-call" :title="event.title" v-html="event.title" v-on:click="openModal( event, options, $event )"></h3>
                                        <div class="wcs-class__meta">
                                            <template v-if="filter_var(options.show_wcs_room)">{{options.label_wcs_room}}</span>
                                                <taxonomy-list :options="options" :tax="'wcs_room'" :event="event" v-on:open-modal="openTaxModal"></taxonomy-list>
                                            </template>
                                            <template v-if="filter_var(options.show_wcs_instructor)"><span class='wcs-addons--pipe'>{{options.label_wcs_instructor}}</span>
                                                <taxonomy-list :options="options" :tax="'wcs_instructor'" :event="event" v-on:open-modal="openTaxModal"></taxonomy-list>
                                            </template>
                                        </div>
                                        <div v-if="filter_var(options.show_excerpt)" class="wcs-class__excerpt" v-html="event.excerpt"></div>
                                    </div>
                                </div>
                            </template>
                            <template v-else>
                                <p class="wcs-zero-data">{{options.zero}}</p>
                            </template>
                        </div>
                    </div>
                </div>
            </template>
		</div><!-- .wcs-table -->
	</div>
	<div v-if="options.mth_cal_agenda_position != 3" class="wcs-timetable__side-col">
		<div v-if="selectedDay" class="wcs-day-agenda">
			<h4 class="wcs-day-agenda__title" v-if="getOption( 'mth_cal_date_format', 'MMMM DD' )">{{selectedDay.date | moment( getOption( 'mth_cal_date_format', 'MMMM DD' ), false) }}</h4>
			<template v-if="getFilteredCalendarEvents(selectedDay.events).length > 0">
			<div v-for="event in getFilteredCalendarEvents(selectedDay.events)" class="wcs-class" :class="event | eventCSS">
				<div v-if="event.thumbnail" class='wcs-class__image wcs-modal-call' :style='"background-image: url(" + event.thumbnail +")"' v-on:click="openModal( event, options, $event )"></div>
				<div class="wcs-class__inner">
					<div class="wcs-class__time-duration">
						<span v-html="starting_ending(event)"></span>
						<span v-if="filter_var(options.show_duration)" class='wcs-class__duration wcs-addons--pipe'>{{event.duration}}</span>
					</div>
					<h3 class="wcs-class__title wcs-modal-call" :title="event.title" v-html="event.title" v-on:click="openModal( event, options, $event )"></h3>
					<div class="wcs-class__meta">
						<template v-if="filter_var(options.show_wcs_room)">{{options.label_wcs_room}}</span>
							<taxonomy-list :options="options" :tax="'wcs_room'" :event="event" v-on:open-modal="openTaxModal"></taxonomy-list>
						</template>
						<template v-if="filter_var(options.show_wcs_instructor)"><span class='wcs-addons--pipe'>{{options.label_wcs_instructor}}</span>
							<taxonomy-list :options="options" :tax="'wcs_instructor'" :event="event" v-on:open-modal="openTaxModal"></taxonomy-list>
						</template>
					</div>
					<div class="wcs-class__action">
						<div class="wcs-class__inner-flex">
							<a v-if="hasModal(event) && options.label_info.length > 0" href="#" class="wcs-btn wcs-modal-call" v-on:click="openModal( event, options, $event )">{{options.label_info}}</a>
							<a v-else-if="hasLink(event) && options.label_info.length > 0" :href="event.permalink" class="wcs-btn">{{options.label_info}}</a>
							<template v-for="(button, button_type) in event.buttons">
								<template v-if="button_type == 'main' && button.label.length > 0 ">
									<a class="wcs-btn wcs-btn--action" v-if="button.method == 0" :href="button.permalink" :target="button.target ? '_blank' : '_self'">{{button.label}}</a>
									<a class="wcs-btn wcs-btn--action" v-else-if="button.method == 1" :href="button.custom_url" :target="button.target ? '_blank' : '_self'">{{button.label}}</a>
									<a class="wcs-btn wcs-btn--action" v-else-if="button.method == 2" :href="button.email" :target="button.target ? '_blank' : '_self'">{{button.label}}</a>
									<a class="wcs-btn wcs-btn--action" v-else-if="button.method == 3" :href="button.ical" target="_blank">{{button.label}}</a>
								</template>
								<template v-else-if="button_type == 'woo'">
									<a :class="button.classes" v-if="button.status" :href="button.href">{{button.label}}</a>
									<a :class="button.classes" v-else-if="!button.status && button.href" :href="button.href">{{button.label}}</a>
									<a :class="button.classes" v-else-if="!button.status" href="#">{{button.label}}</a>
								</template>
							</template>
						</div>
					</div>
<?php echo "testing" ?>
					<div v-if="filter_var(options.show_excerpt)" class="wcs-class__excerpt" v-html="event.excerpt"></div>
				</div>
			</div>
		</template>
		<template v-else>
			<p class="wcs-zero-data">{{options.zero}}</p>
		</template>
		</div>
	</div>
</div><!-- .wcs-timetable -->
