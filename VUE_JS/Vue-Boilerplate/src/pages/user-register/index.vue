<script>
import { FormContainer, TextField } from "../../components";
import { APIService, Logger } from "../../services";
import { RouteEnum } from "../../router";

export default {
    name: 'UserRegister',
    components: {
        FormContainer,
        TextField,
    },
    data: () => ({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    }),
    methods: {
        async submit() {
            try {
                const payload = {
                    "name": this.name,
                    "email": this.email,
                    "password": this.password,
                }
                const result = await APIService.rawPost("/authaccount/registration", payload);
                Logger.info("register success", { payload, result });
                this.$router.push(RouteEnum.LOGIN);
            } catch (err) {
                Logger.error("register err", err);
            }
        },
        clear() {
            this.name = '';
            this.phoneNumber = '';
            this.email = '';
            this.password = '';
            this.confirmPassword = '';
            this.$refs.observer.reset();
        },
    },
}
</script>

<template>
    <form-container :submit="submit" :clear="clear">
        <text-field v-model="name" name="Name" label="Name" rules="required|max:10" required :counter="10" />
        <text-field v-model="email" name="email" label="E-mail" rules="required|email" required />
        <text-field v-model="password" type="password" name="Password" label="Password" rules="required|max:10"
            required />
        <text-field v-model="password" type="password" name="ConfirmPassword" label="ConfirmPassword"
            rules="required|max:10" required />
        <template #footer>
            <div> Already registerd ? <br />
                <router-link to='/login'>Login</router-link>
            </div>
        </template>
    </form-container>
</template>
