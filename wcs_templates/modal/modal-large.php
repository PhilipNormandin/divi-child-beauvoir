<script type="text/x-template" id="wcs_templates_modal--large">
	<div class="wcs-modal" :class="modal_classes" v-on:click="closeModal">
		<div class="wcs-modal__box">
			<div class="wcs-modal__inner">
				<a href="#" class="wcs-modal__close ti-close" v-on:click="closeModal"></a>
				<div class="wcs-modal__side" :style="data.image ? 'background-image: url(' + <?php '{{ data.image }}' ?> + ')' : ''">
					<div class="wcs-modal__inner-side">
						<h2>
							<template v-for="(button, button_type) in data.buttons">
								<template v-if="button_type == 'main' && button.label.length > 0">
									<a class="wcs-btn wcs-btn--action" v-if="button.method == 0" :href="button.permalink" :target="button.target ? '_blank' : '_self'">{{button.label}}</a>
									<a class="wcs-btn wcs-btn--action" v-else-if="button.method == 1" :href="button.custom_url" :target="button.target ? '_blank' : '_self'">{{button.label}}</a>
									<a class="wcs-btn wcs-btn--action" v-else-if="button.method == 2" :href="button.email" :target="button.target ? '_blank' : '_self'">{{button.label}}</a>
									<a class="wcs-btn wcs-btn--action" v-else-if="button.method == 3" :href="button.ical">{{button.label}}</a>
								</template>
								<template v-else-if="button_type == 'woo'">
									<a :class="button.classes" v-if="button.status" :href="button.href">{{button.label}}</a>
									<a :class="button.classes" v-else-if="!button.status && button.href" :href="button.href">{{button.label}}</a>
									<a :class="button.classes" v-else-if="!button.status" href="#">{{button.label}}</a>
								</template>
							</template>
							<span v-html="data.title"></span>
<?php echo "<span :src='data.image'></span>" ?>
<?php $filename = " <p>{{ data.image }}</p>";
	  // $extension_pos = strrpos($filename, '.'); // find position of the last dot, so where the extension starts
	  // $newfilename = substr($my_img_url, 0, $extension_pos) . '-600x400' . substr($filename, $extension_pos);
	  // $newfilename = substr_replace($filename, '-600x400', -4, 0);
	  // $newfilename = str_replace(".jpg", "-600x400.jpg", $filename);
	  echo str_replace(".jpg", "-600x400.jpg", '{{ data.image }}');
	  // $newfilename = preg_replace("/\.jpg$/i","-600x400.jpg",$filename);
  	  // echo $newfilename;
?>
							<small v-if="filter_var(options.modal_wcs_type) && data.terms.wcs_type">
                                <taxonomy-list :options="options" :tax="'wcs_type'" :event="data" v-on:open-modal="openTaxModal"></taxonomy-list>
							</small>
						</h2>

						<ul class="wcs-modal__meta">
							<li>
								<span class="ti-calendar"></span>{{ data.start | moment( options.label_modal_dateformat ? options.label_modal_dateformat : 'MMMM DD @ HH:mm' ) }}
								<template v-if="isMultiDay(data)">
									- {{ data.end |moment( options.label_modal_dateformat ? options.label_modal_dateformat : 'MMMM DD @ HH:mm' ) }}
								</template>
							</li>
							<li v-if="filter_var( options.show_modal_ending )">
								<span class="ti-time"></span>
								{{ data.start | moment( options.show_time_format ? 'h' : 'HH' ) }}<span class='wcs-addons--blink'>:</span>{{ data.start | moment('mm') }}
								{{ data.start | moment( options.show_time_format ? 'a' : ' ' ) }}
								-
								{{ data.end | moment( options.show_time_format ? 'h' : 'HH' ) }}<span class='wcs-addons--blink'>:</span>{{ data.end | moment('mm') }}
								{{ data.end | moment( options.show_time_format ? 'a' : ' ' ) }}
								<span v-if="options.show_modal_duration" class="wcs-modal--muted wcs-addons--pipe">{{data.duration}}</span>
							</li>
							<li v-if="filter_var(options.modal_wcs_room) && data.terms.wcs_room">
								<span class="ti-location-arrow"></span>
								<taxonomy-list :options="options" :tax="'wcs_room'" :event="data" v-on:open-modal="openTaxModal"></taxonomy-list>
							</li>
							<li v-if="filter_var(options.modal_wcs_instructor) && data.terms.wcs_instructor">
								<span class="ti-user"></span>
								<taxonomy-list :options="options" :tax="'wcs_instructor'" :event="data" v-on:open-modal="openTaxModal"></taxonomy-list>
							</li>
						</ul>

					</div>
				</div>
				<div class="wcs-modal__content" v-html="data.content"></div>
				<div v-if="data.map" class="wcs-map"></div>
			</div>
		</div>
	</div>
</script>
