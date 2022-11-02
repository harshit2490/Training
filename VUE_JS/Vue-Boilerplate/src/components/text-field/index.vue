<script>
export default {
    name: 'TextField',
    props: {
        value: {},
        type: {
            type: String,
            default: "text",
        },
        name: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        rules: {
            type: String,
        },
        counter: {
            type: Number,
            default: 10,
        },
        required: {
            type: Boolean,
            default: false,
        },
    },
    data: () => ({
        innerValue: '',
    }),
    watch: {
        innerValue(val) {
            this.$emit('input', val);
        }
    },
}
</script>

<template>
    <validation-provider v-slot="{ errors }" :name="name" :rules="rules">
        <v-text-field :type="type" v-model="innerValue" :value="value" :counter="counter" :error-messages="errors"
            :label="label" :required="required" />
    </validation-provider>
</template>
