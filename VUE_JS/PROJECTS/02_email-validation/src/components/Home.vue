<template>
  <div>
    <div class="title">
      <h1>Welcome to Home Page</h1>
    </div>

    <h2>Products</h2>
    <v-container class="container" fill-height>
      <v-row class="text-center" justify="center">
        <v-col cols="12" sm="12" md="12" lg="12">
          <v-card elevation="3" outlined style="padding: 30px">
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
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <router-link to="/login">
      <v-btn color="primary" depressed elevation="2" type="submit">
        LogOut
      </v-btn>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomePage",
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

<style scoped>
.title {
  padding-top: 60px;
  padding-bottom: 20px;
}
</style>