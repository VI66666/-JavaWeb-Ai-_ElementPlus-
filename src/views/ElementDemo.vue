<script setup>
import { ref } from 'vue'

'use strict'
const tableData = [
    { date: '2016-05-03', name: 'Tom1', address: 'No. 189, Grove St, Los Angeles', },
    { date: '2016-05-02', name: 'Tom2', address: 'No. 189, Grove St, Los Angeles', },
    { date: '2016-05-04', name: 'Tom3', address: 'No. 189, Grove St, Los Angeles', },
    { date: '2016-05-01', name: 'Tom4', address: 'No. 189, Grove St, Los Angeles', },
]

const currentPage4 = ref(1)
const pageSize4 = ref(10)
const total = ref(400)
const background = ref(true)
const handleSizeChange = (val) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
    console.log(`current page: ${val}`)
}

const dialogTableVisible =  ref(false)

const formInline = ref({
  user: '',
  region: '',
  date: '',
})
const onSubmit = () => {
  console.log('submit!')
}

</script>

<template>
    <!-- 按钮组件 -->
    <div class="button-row">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
    </div>
    <div class="button-row">
        <el-button plain>Plain</el-button>
        <el-button type="primary" plain>Primary</el-button>
        <el-button type="success" plain>Success</el-button>
        <el-button type="info" plain>Info</el-button>
        <el-button type="warning" plain>Warning</el-button>
        <el-button type="danger" plain>Danger</el-button>
    </div>

    <!-- 表格组件 -->
    <div class="button-row">
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
        </el-table>
    </div>

    <!-- 分页条组件 -->
    <div class="button-row">
        <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
            :page-sizes="[100, 200, 300, 400]" :background="background" layout="total, sizes, prev, pager, next, jumper"
            :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>

    <!-- 对话框组件 -->
    <div class="button-row">
        <el-button class="!ml-0" plain @click="dialogTableVisible = true">Open a Table nested Dialog</el-button>
        <el-dialog v-model="dialogTableVisible" title="Shipping address" width="800px">
            <el-table :data="tableData">
                <el-table-column property="date" label="Date" width="150" />
                <el-table-column property="name" label="Name" width="200" />
                <el-table-column property="address" label="Address" />
            </el-table>
        </el-dialog>
    </div>

    <!-- 表单组件 -->
    <div class="button-row">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="Approved by">
                <el-input v-model="formInline.user" placeholder="Approved by" clearable />
            </el-form-item>
            <el-form-item label="Activity zone">
                <el-select v-model="formInline.region" placeholder="Activity zone" clearable>
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="Activity time">
                <el-date-picker v-model="formInline.date" type="date" placeholder="Pick a date" clearable value-format="YYYY-MM-DD" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Query</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>

<style scoped>
.button-row {
    margin-bottom: 10px;
}
.demo-form-inline .el-input {
  --el-input-width: 220px;
}
.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>