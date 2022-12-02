<template>
    <a-row type="flex" justify="center" align="middle" style="height: 100vh;">
        <a-col :span="8">
            <a-form
                :model="formState"
                name="basic"
                :label-col="{ span: 8 }"
                :wrapper-col="{ span: 16 }"
                autocomplete="off"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
            >
                <a-form-item
                    label="Username"
                    name="username"
                    :rules="[{ required: true, message: 'ป้อนชื่อผู้ใช้ก่อน!' }]"
                >
                <a-input v-model:value="formState.username" /></a-form-item>

                <a-form-item
                    label="Password"
                    name="password"
                    :rules="[{ required: true, message: 'ป้อนรหัสผ่านก่อน!' }]"
                >
                <a-input-password v-model:value="formState.password" />
                </a-form-item>

                <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
                <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
                </a-form-item>

                <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" html-type="submit">Submit</a-button>
                </a-form-item>

            </a-form>
        </a-col>
    </a-row>
</template>

<script setup lang="ts">

    import {  ref  } from "vue"

    interface FormState {
        username: string
        password: string
        remember: boolean
    }

    const formState = ref<FormState>({
      username: '',
      password: '',
      remember: true,
    })
    
    const onFinish = (values: any) => {
      console.log('Success:', values);
    }

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    }


</script>

<style scoped>

</style>