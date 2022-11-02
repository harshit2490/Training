<script>
import { FormContainer, TextField } from "../../components";
import { APIService, Logger } from "../../services";
import { RouteEnum } from "../../router";

export default {
    name: 'UserLogin',
    components: {
        FormContainer,
        TextField,
    },
    data: () => ({
        email: "",
        password: "",
    }),
    methods: {
        async submit() {
            try {
                const payload = {
                    "email": this.email,
                    "password": this.password,
                }
                const result = await APIService.rawPost("/authaccount/login", payload);
                Logger.info("login success", { payload, result });
                this.$router.push(RouteEnum.HOME);
            } catch (err) {
                Logger.error("login err", err);
            }
        },
        clear() {
            this.email = '';
            this.password = '';
            this.$refs.observer.reset();
        },
    },
}
</script>

<template>
    <form-container :submit="submit" :clear="clear">
        <text-field v-model="email" name="email" label="E-mail" rules="required|email" required />
        <text-field v-model="password" type="password" name="Password" label="Password" rules="required|max:10"
            required />
        <template #footer>
            <div>
                Not yet a member ?
                <br />
                <router-link to='/register'>Sign Up</router-link>
            </div>
        </template>
    </form-container>
</template>
