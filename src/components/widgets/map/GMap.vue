<template>

  <div class="gmap">
  </div>

</template>

<script>
import Util from "@/util"

export default {
  name: 'gmap',
  async mounted() {
    try {
      console.log("hi")
      const google = await Util.mapInit();
      const geocoder = new google.maps.Geocoder();
      const map = new google.maps.Map(this.$el);

      geocoder.geocode({ address: 'Fort Collins' }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status);
        }

        map.setCenter(results[0].geometry.location);
        map.fitBounds(results[0].geometry.viewport);
      });
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style>
.gmap {
  width: 100%;
  height: 400px;
}
</style>