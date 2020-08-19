<template>
  <div id="app">
    <client :playerID="'0'" />
    <client :playerID="'1'" />
  </div>
</template>

<script>
import Client from './Client';

export default {
  name: 'App',
  components: {
    'client': Client,
  }
}
</script>