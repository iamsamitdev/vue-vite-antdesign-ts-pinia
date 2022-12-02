<template>

    <a-row type="flex" justify="center" align="middle" style="height:100vh">
        <a-col :span="12">
            <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
        </a-col>
    </a-row>
    
</template>

<script setup lang="ts">

    import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

    const editor = ClassicEditor
    const editorData = '<p>Content of the editor</p>'
    const editorConfig = {
        // toolbar: {
        //     items: [
        //         'bold',
        //         'italic',
        //         'link',
        //         'undo',
        //         'redo'
        //     ]
        // }
    }

</script>

<style>
    .ck-editor__editable {
        min-height: 200px;
    }
</style>