<script>
export default {
    name: 'FormContainer',
    props: {
        submit: {
            type: Function,
            required: true
        },
        clear: {
            type: Function,
            required: true
        },
        submitBtnLabel: {
            type: String,
            default: "Submit"
        },
        cancelBtnLabel: {
            type: String,
            default: "Clear"
        }
    },
    methods: {
        onSubmit(value) {
            this.$refs.observer.validate();
            console.log("onSubmit => value", value);
            this.submit();
        },
        onClear() {
            this.clear();
            this.$refs.observer.reset();
        },
    },
}
</script>

<template>
    <validation-observer ref="observer" v-slot="{ invalid }">
        <form @submit.prevent="onSubmit">
            <slot />
            <v-btn class="mr-4" type="submit" :disabled="invalid">
                {{submitBtnLabel}}
            </v-btn>
            <v-btn @click="onClear">
                {{cancelBtnLabel}}
            </v-btn>
            <slot name="footer"></slot>
        </form>
    </validation-observer>
</template>