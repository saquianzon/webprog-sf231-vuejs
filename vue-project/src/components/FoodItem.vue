<template>
    <div v-on:click="countClicks">
        <div class="apple">
            <h2>{{ name }}</h2>  
            <p>{{ message }}</p>
            <p id="red">You have clicked me {{ clicks }} times.</p>
        </div>
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        name: 'Apples',
        message: 'I like apples',
        clicks: 0
      }
    },
    methods: {
      countClicks() {
        this.clicks++;
      }
    }
  }
  </script>
  
  <style>
    .apple {
          border: dashed black 1px;
          display: inline-block;
          margin: 10px;
          padding: 10px;
          background-color: lightgreen;
      }
  </style>