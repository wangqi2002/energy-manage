<template>
    <div class="content-page">
        <div class="content-main">
            <div class="filter-box" v-if="userInfo.user_stand == 1">
                <el-form :inline="true" :model="filterForm" class="form-inline">
                    <el-form-item label="用户姓名">
                        <el-input v-model="filterForm.user_name" placeholder="用户姓名"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmitFilter">查询</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="addUser">添加</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="form-table-box" v-if="userInfo.user_stand == 0">
                <el-table id="user-table" class="user-table" :data="tableData" style="width: 100%" border stripe>
                    <el-table-column type="index" label="ID" width="60"> </el-table-column>
                    <el-table-column label="头像" width="120">
                        <template slot-scope="scope">
                            <img :src="'' + scope.row.user_image" alt="" style="width: 50px; height: 50px" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="user_name" label="姓名"></el-table-column>
                    <el-table-column prop="user_stand" label="身份"></el-table-column>
                </el-table>
            </div>
            <div class="page-box" v-if="userInfo.user_stand == 0">
                <el-pagination background @current-change="handlePageChange" :current-page.sync="page" :page-size="4"
                    layout="total, prev, pager, next" :total="total">
                </el-pagination>
            </div>
            <div class="form-table-box" v-if="userInfo.user_stand == 1">
                <el-table id="user-table" class="user-table" :data="tableData" style="width: 100%" border stripe>
                    <el-table-column type="index" label="ID" width="60"> </el-table-column>
                    <el-table-column label="头像" width="120">
                        <template slot-scope="scope">
                            <img :src="'' + scope.row.user_image" alt="" style="width: 50px; height: 50px" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="user_name" label="姓名"></el-table-column>
                    <el-table-column prop="user_stand" label="身份"></el-table-column>
                    <el-table-column fixed="right" label="操作" width="100">
                        <template slot-scope="scope">
                            <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
                            <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
                        </template></el-table-column>
                </el-table>
            </div>
            <div class="page-box" v-if="userInfo.user_stand == 1">
                <el-pagination background @current-change="handlePageChange" :current-page.sync="page" :page-size="4"
                    layout="total, prev, pager, next" :total="total">
                </el-pagination>
            </div>
        </div>
        <el-dialog width="40%" title="添加用户" :visible.sync="addVisible" append-to-body>
            <el-form :model="form">
                <el-form-item label="用户姓名" :label-width="formLabelWidth">
                    <el-input v-model="form.user_name" autoComplete="off"></el-input>
                </el-form-item>
                <el-form-item label="用户权限" :label-width="formLabelWidth">
                    <el-input v-model="form.user_stand" autoComplete="off"></el-input>
                </el-form-item>
                <el-form-item label="用户头像" :label-width="formLabelWidth">
                    <el-upload class="upload-demo" action="" :file-list="form.user_avatar" :limit="1" list-type="picture"
                        :on-change="handleChange" :auto-upload="false">
                        <el-button slot="trigger" size="small" type="primary">选取图片</el-button>
                    </el-upload>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="handleCancel">取 消</el-button>
                <el-button type="primary" @click="handleAddConfirm">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog width="40%" title="修改用户" :visible.sync="editVisible" append-to-body>
            <el-form :model="form">
                <el-form-item label="用户姓名" :label-width="formLabelWidth">
                    <el-input v-model="form.user_name" autoComplete="off"></el-input>
                </el-form-item>
                <el-form-item label="用户权限" :label-width="formLabelWidth">
                    <el-input v-model="form.user_stand" autoComplete="off"></el-input>
                </el-form-item>
                <el-form-item label="用户头像" :label-width="formLabelWidth">
                    <el-upload class="upload-demo" action="" :file-list="form.user_avatar" :limit="1" list-type="picture"
                        :on-change="handleChange" :auto-upload="false">
                        <el-button slot="trigger" size="small" type="primary">选取图片</el-button>
                    </el-upload>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="handleCancel">取 消</el-button>
                <el-button type="primary" @click="handleEditConfirm">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            page: 1,
            total: 20,
            userInfo: {
                user_name: '',
                user_avatar: '',
                user_stand: '',
            },
            filterForm: {
                user_name: ''
            },
            tableData: [
                {
                    user_image: '../../../static/images/avatar/1.png',
                    user_name: '张三',
                    user_stand: '管理员'
                },
                {
                    user_image: '../../../static/images/avatar/2.png',
                    user_name: '李四',
                    user_stand: '普通用户'
                },
                {
                    user_image: '../../../static/images/avatar/2.png',
                    user_name: '王五',
                    user_stand: '普通用户'
                },
                {
                    user_image: '../../../static/images/avatar/1.png',
                    user_name: '张三',
                    user_stand: '普通用户'
                }
            ],
            addVisible: false,
            editVisible: false,
            formLabelWidth: '80px',
            form: {
                user_name: '',
                user_stand: '',
                user_avatar: []
            }
        }
    },
    methods: {
        handleEdit(row) {
            console.log('handleEdit', row)
            this.editVisible = true
        },
        handleDelete(row) {
            console.log('handleDelete', row)
            $.ajax({
                url: this.baseURL.serverSrc + '',  // 后端地址
                type: '',
                data: {},
                dataType: 'json',
                success: function (data) { //后端返回的json数据（此处data为json对象）
                    console.log('成功', data);
                },
                error: function () {
                    alert('异常')
                }
            });
        },
        handlePageChange(val) {
            this.page = val
        },
        onSubmitFilter() {
            this.findUser()
        },
        getList() {
            $.ajax({
                url: this.baseURL.serverSrc + '',  // 后端地址
                type: '',
                data: {},
                dataType: 'json',
                success: function (data) { //后端返回的json数据（此处data为json对象）
                    console.log('成功', data);
                },
                error: function () {
                    alert('异常')
                }
            });
        },
        findUser() {
            $.ajax({
                url: this.baseURL.serverSrc + '',  // 后端地址
                type: '',
                data: {},
                dataType: 'json',
                success: function (data) { //后端返回的json数据（此处data为json对象）
                    console.log('成功', data);
                },
                error: function () {
                    alert('异常')
                }
            });
        },
        addUser() {
            this.addVisible = true
            if (this.filterForm.user_name != null && this.filterForm.user_name != undefined) {
                this.form.user_name = this.filterForm.user_name
            }
            console.log('addUser')
        },
        handleChange(file, fileList) {
            this.form.user_avatar = fileList
        },
        handleCancel() {
            this.addVisible = false
            this.editVisible = false
            this.form = {
                user_name: '',
                user_stand: '',
                user_avatar: []
            }
        },
        handleAddConfirm() {
            this.addVisible = false
            console.log(this.form)
            $.ajax({
                url: this.baseURL.serverSrc + '',  // 后端地址
                type: '',
                data: {},
                dataType: 'json',
                success: function (data) { //后端返回的json数据（此处data为json对象）
                    console.log('成功', data);
                },
                error: function () {
                    alert('异常')
                }
            });
            this.form = {
                user_name: '',
                user_stand: '',
                user_avatar: []
            }
        },
        handleEditConfirm() {
            this.addVisible = false
            console.log(this.form)
            $.ajax({
                url: this.baseURL.serverSrc + '',  // 后端地址
                type: '',
                data: {},
                dataType: 'json',
                success: function (data) { //后端返回的json数据（此处data为json对象）
                    console.log('成功', data);
                },
                error: function () {
                    alert('异常')
                }
            });
            this.form = {
                user_name: '',
                user_stand: '',
                user_avatar: []
            }
        },
    },
    components: {},
    mounted() {
        // this.getList()
        this.userInfo = this.$store.state.userInfo
    }
}
</script>
  
<style>
.user-table table td {
    float: none;
}

#user-table .user-table .el-table th,
.el-table tr {
    background-color: #fff;
}

.el-table th.gutter {
    display: table-cell !important;
}

.el-table th>.cell {
    text-align: center;
}

.page-box {
    position: absolute;
    bottom: 10px;
    right: 20px;
}
</style>
  