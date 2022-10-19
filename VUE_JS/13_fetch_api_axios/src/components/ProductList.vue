<template>
  <div>
    <h1>Products</h1>
    <table border="1px">
      <tr>
        <td>Id</td>
        <td>Title</td>
        <td>Price</td>
        <td>Rating</td>
      </tr>
      <tr v-for="info in info" :key="info.id">
        <td>{{ info.id }}</td>
        <td>{{ info.title.substring(0, 15) }}</td>
        <td>{{ info.price }}</td>
        <td>{{ info.rating }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  // el: "#app",
  name: "ProductList",
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
    };
  },
  mounted() {
    axios
      // Calling dummy api...
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        this.info = response.data;
        console.warn(response.data);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>
