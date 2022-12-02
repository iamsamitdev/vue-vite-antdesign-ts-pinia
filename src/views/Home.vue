<template>

    <!-- Sample Button with AntDesign -->
    <hr>
    <div>
        <a-button>Defalut Button</a-button>
        <a-button type="primary">Primary Button</a-button>
        <a-button type="dashed">Dashed Button</a-button>
    </div>

    <hr>

    <!-- Import Some Widget -->
    <Space>
        <Button type="default">Defalut Button</Button>
        <Button type="primary">Primary Button</Button>
        <Button type="dashed" danger>Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
    </Space>

    <hr>
    
    <!-- And Design Component -->
    <div>
        <a-row>
          <a-col span="12">
            <a-alert type="info" message="Hello" />
            <a-alert type="success" message="Hello" />
            <a-alert type="warning" message="Hello" />
            <a-alert type="error" message="Hello" />
          </a-col>
          <a-col span="12">
            <a-button type="primary">Click me</a-button>
            <a-skeleton avatar paragraph="4"></a-skeleton>
          </a-col>
        </a-row>
    </div>

    <hr>
    <!-- Ant Design Icon -->
    <rocket-outlined  :style="{ color:'#08c', fontSize: '100px' }"/>
    <rocket-filled :style="{ fontSize: '100px' }" />
    <rocket-two-tone two-tone-color="#eb2f96" :style="{ fontSize: '100px' }" />
    <rocket-two-tone two-tone-color="#eb2f96" :rotate="180" :style="{ fontSize: '100px' }" />
    <rocket-outlined spin  :style="{ fontSize: '100px' }"/>

    <hr>
    <!-- Modal -->
    <div>
        <Space>
            <a-button type="primary" @click="showModal">Open Modal</a-button>
            <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
                <p>Some content...</p>
                <p>Some content...</p>
                <p>Some content...</p>
                <p>Some content...</p>
            </a-modal>

            <a-button type="dashed" @click="showDeleteConfirm">Delete</a-button>
        </Space>
    </div>

</template>

<script setup lang="ts">

    import { Button, Space, Modal } from 'ant-design-vue'
    import { RocketOutlined, RocketFilled, RocketTwoTone, ExclamationCircleOutlined } from '@ant-design/icons-vue'
    import { ref, createVNode } from 'vue'

    // Modal
    const visible = ref<boolean>(false)

    // Handle Modal
    const showModal = () => {
        visible.value = true
    }

    // Handle OK Button
    const handleOk = (e: MouseEvent) => {
        console.log(e)
        visible.value = false
    }

    // Method Delete
    const showDeleteConfirm = () => {
      Modal.confirm({
        title: 'Are you sure delete this task?',
        icon: createVNode(ExclamationCircleOutlined),
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      })
    }


</script>

<style scoped>

</style>