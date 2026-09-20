<script setup>

import { ref } from 'vue'

const emp = ref({name: '',gender: '',job: '',})
const onSubmit = () => {
  console.log('submit!')
}
</script>

<template>
    <!-- 员工列表查询 -->
    <div id="container">
        <!-- 搜索表单 -->
        <el-form :inline="true" :model="emp" class="demo-form-inline">
            <el-form-item label="姓名：">
                <el-input v-model="emp.name" placeholder="请输入" clearable />
            </el-form-item>
            <el-form-item label="性别：">
                <el-select v-model="emp.gender" placeholder="Activity zone" clearable>
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="Activity time">
                <el-date-picker v-model="emp.job" type="date" placeholder="Pick a date" clearable
                    value-format="YYYY-MM-DD" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Query</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style scoped></style>
