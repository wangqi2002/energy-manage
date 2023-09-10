<template>
    <div class="content-page">
        <div class="content-main">
            <div class="filter-box" v-if="stand == 1">
                <el-form :inline="true" :model="filterForm" class="demo-form-inline">
                    <el-form-item label="用户姓名">
                        <el-input v-model="filterForm.username" placeholder="用户姓名"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmitFilter">查询</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="addUser">添加</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="form-table-box" v-if="stand == 0">
                <el-table class="user-table" :data="tableData" style="width: 100%" border stripe>
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
            <div class="page-box" v-if="stand == 0">
                <el-pagination background @current-change="handlePageChange" :current-page.sync="page" :page-size="4"
                    layout="total, prev, pager, next" :total="total">
                </el-pagination>
            </div>
            <div class="form-table-box" v-if="stand == 1">
                <el-table class="user-table" :data="tableData" style="width: 100%" border stripe>
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
            <div class="page-box" v-if="stand == 1">
                <el-pagination background @current-change="handlePageChange" :current-page.sync="page" :page-size="4"
                    layout="total, prev, pager, next" :total="total">
                </el-pagination>
            </div>
        </div>
        <el-dialog width="40%" title="添加用户" :visible.sync="innerVisible" append-to-body>
            <el-form :model="form">
                <el-form-item label="用户姓名" :label-width="formLabelWidth">
                    <el-input v-model="form.username" autoComplete="off"></el-input>
                </el-form-item>
                <el-form-item label="用户权限" :label-width="formLabelWidth">
                    <el-input v-model="form.stand" autoComplete="off"></el-input>
                </el-form-item>
                <el-form-item label="用户头像" :label-width="formLabelWidth">
                    <el-upload class="upload-demo" action="" :file-list="form.fileList" :limit="1" list-type="picture"
                        :on-change="handleChange" :auto-upload="false">
                        <el-button slot="trigger" size="small" type="primary">选取图片</el-button>
                    </el-upload>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="handleCancel">取 消</el-button>
                <el-button type="primary" @click="handleConfirm">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            page: 1,
            total: 0,
            filterForm: {
                username: ''
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
            stand: 1,
            loginInfo: null,
            username: '',
            innerVisible: false,
            formLabelWidth: '80px',
            form: {
                username: '',
                stand: '',
                fileList: []
            }
        }
    },
    methods: {
        handleEdit(row) {
            console.log('handleEdit', row)
        },
        handleDelete(row) {
            console.log('handleDelete', row)
        },
        handlePageChange(val) {
            this.page = val
            //保存到localStorage
            localStorage.setItem('userPage', this.page)
            this.getList()
        },
        onSubmitFilter() {
            this.findUser()
        },
        getList() {
            // this.axios
            //     .get('user', {
            //         params: {
            //             page: this.page
            //         }
            //     })
            //     .then(response => {
            //         console.log(response.data)
            //         this.tableData = response.data.userData
            //         this.page = response.data.page
            //         this.total = response.data.count
            //     })
            // if (!this.loginInfo) {
            //     this.loginInfo = JSON.parse(window.localStorage.getItem('userInfo') || null)
            //     this.username = this.loginInfo.admin_name
            // }
        },
        findUser() {
            console.log(this.filterForm.username)
            this.axios
                .get('user/find', {
                    params: {
                        username: this.filterForm.username
                    }
                })
                .then(response => {
                    console.log(response)
                    this.tableData = response.data.userData
                    this.page = response.data.page
                    this.total = response.data.count
                })
        },
        addUser() {
            this.innerVisible = true
            console.log('addUser')
        },
        handleChange(file, fileList) {
            this.form.fileList = fileList
        },
        handleCancel() {
            this.innerVisible = false
        },
        handleConfirm() {
            this.innerVisible = false
            console.log(this.form)
        },
    },
    components: {},
    mounted() {
        // this.getList()
    }
}
</script>
  
<style>
.user-table table td {
    float: none;
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
  