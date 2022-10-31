# Email Validation Task

API used for Registration and Login:
</br>
https://www.appsloveworld.com/sample-rest-api-url-for-testing-with-authentication#huserregistration

* Create a user registeration page with below fields:
1. email - Required, valid email.
2. name - Required.
3. password - Required, Alpha numeric.
4. confirm password - Required, Alpha numeric.

Requirement:
* All the fields are required.
* Password and confirm password shud be same.
* Validate email address.
* Submit form if all the fields are filled and valid.
* In case of success, show success toastr message "You are successfully registered" and redirect to login page.
* If case of error, show error toastr message that you will get from api.

Use:
* Vuetify component.
* Axios for making api calls.
* Vue router for routing.

Reference for vee-validate:
</br>
https://vuetifyjs.com/en/components/forms/#vee-validate
</br>
https://vee-validate.logaretm.com/v3/guide/basics.html#validation-provider) 


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
