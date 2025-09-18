<template>
  <section
    class="w-full h-fit min-h-[calc(100vh-16rem)] grid grid-cols-12 px-8"
  >
    <!-- LEFT SIDE  -->
    <div
      class="md:col-span-7 col-span-12 max-md:h-[40vh] flex flex-col justify-center items-start"
    >
      <h1 class="md:text-7xl text-5xl font-medium mb-3" data-aos="fade-up">
        {{ $t('heroContainer.hello') }} <br />{{ $t('heroContainer.iAm') }}
      </h1>
      <p class="text-xl font-medium w-10/12 text-text/80 mb-4" data-aos="fade-up" data-aos-delay="100">
        {{ $t('heroContainer.description') }}
      </p>

      <div class="flex gap-2 items-center" data-aos="fade-up" data-aos-delay="200">
        <map-pin :stroke-width="2" />
        <p>{{ $t('heroContainer.location') }}</p>
      </div>
    </div>

    <!-- RIGHT SIDE  -->
    <div class="md:col-span-5 col-span-12 max-md:h-[40vh] grid place-items-center">
      <div class="profile-image" data-aos="zoom-out-up" data-aos-delay="300" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { MapPin } from '@iconoir/vue';
</script>

<style scoped>
.profile-image {
  width: 100%;
  max-width: 420px;
  background-image: url('/static/profile_image.jpg');
  background-size: cover;
  background-position: center;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  clip-path: shape(from 51.23% 93.00%,curve to 16.88% 76.27% with 30.50% 91.44%,curve to 7.36% 40.47% with 3.25% 61.11%,curve to 30.54% 12.79% with 11.47% 19.83%,curve to 67.71% 13.33% with 49.60% 5.74%,curve to 91.32% 40.58% with 85.81% 20.91%,curve to 84.39% 77.40% with 96.83% 60.25%,curve to 51.23% 93.00% with 71.95% 94.55%);
}

@media (max-width: 768px) {
  .profile-image {
    max-width: 360px;
  }
}
</style>
