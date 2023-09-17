<template>
  <div class="content-page">
    <div class="content-main">
      <div class="filter-box" v-if="userInfo.role == 1">
        <el-form :inline="true" :model="filterForm" class="form-inline">
          <el-form-item label="用户姓名">
            <el-input
              v-model="filterForm.name"
              placeholder="用户姓名"
            ></el-input>
          </el-form-item>
          <!-- <el-form-item>
            <el-button type="primary" @click="onSubmitFilter">查询</el-button>
          </el-form-item> -->
          <el-form-item>
            <el-button type="primary" @click="addUser">添加</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="form-table-box" v-if="userInfo.role == 0">
        <el-table
          id="user-table"
          class="user-table"
          :data="tableData"
          style="width: 100%"
          border
          stripe
        >
          <el-table-column type="index" label="ID" width="60">
          </el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="role" label="身份">
            <template slot-scope="scope">
              <span>{{
                scope.row.role == "1" ? "管理员用户" : "普通用户"
              }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="page-box" v-if="userInfo.role == 0">
        <el-pagination
          background
          @current-change="handlePageChange"
          :current-page.sync="page"
          :page-size="4"
          layout="total, prev, pager, next"
          :total="total"
        >
        </el-pagination>
      </div>
      <div class="form-table-box" v-if="userInfo.role == 1">
        <el-table
          id="user-table"
          class="user-table"
          :data="tableData"
          style="width: 100%"
          border
          stripe
        >
          <el-table-column type="index" label="ID" width="60">
          </el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="role" label="身份">
            <template slot-scope="scope">
              <span>{{
                scope.row.role == "1" ? "管理员用户" : "普通用户"
              }}</span>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleEdit(scope.row)" type="text" size="small"
                >编辑</el-button
              >
              <el-button
                @click="handleDelete(scope.row)"
                type="text"
                size="small"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="page-box" v-if="userInfo.role == 1">
        <el-pagination
          background
          @current-change="handlePageChange"
          :current-page.sync="page"
          :page-size="4"
          layout="total, prev, pager, next"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>
    <el-dialog
      width="40%"
      title="添加用户"
      :visible.sync="addVisible"
      append-to-body
    >
      <el-form :model="form">
        <el-form-item label="用户姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autoComplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autoComplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户权限" :label-width="formLabelWidth">
          <el-select v-model="form.role" placeholder="请选择">
            <el-option
              v-for="item in roleList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="handleAddConfirm">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog
      width="40%"
      title="修改用户"
      :visible.sync="editVisible"
      append-to-body
    >
      <el-form :model="form">
        <el-form-item label="用户姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autoComplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autoComplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户权限" :label-width="formLabelWidth">
          <el-select v-model="form.role" placeholder="请选择">
            <el-option
              v-for="item in roleList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
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
import { Natification } from "element-ui";
export default {
  data() {
    return {
      page: 1,
      total: 20,
      userInfo: {
        name: "",
        password: "",
        role: "",
      },
      filterForm: {
        name: "",
      },
      roleList: [
        { value: 0, label: "普通用户" },
        { value: 1, label: "管理员用户" },
      ],
      tableData: [
        {
          name: "张三",
          role: "1",
        },
        {
          name: "李四",
          role: "0",
        },
        {
          name: "王五",
          role: "0",
        },
        {
          name: "王海",
          role: "0",
        },
      ],
      addVisible: false,
      editVisible: false,
      formLabelWidth: "80px",
      form: {
        name: "",
        password: "",
        role: "",
      },
    };
  },
  methods: {
    handleEdit(row) {
      console.log("handleEdit", row);
      this.editVisible = true;
    },
    handleDelete(row) {
      console.log("handleDelete", row);
      $.ajax({
        url: this.baseURL.serverSrc + "", // 后端地址
        type: "post",
        data: { name: row.name },
        dataType: "json",
        success: function (data) {
          //后端返回的json数据（此处data为json对象）
          console.log("成功", data);
        },
        error: function () {
          alert("异常");
        },
      });
    },
    handlePageChange(val) {
      this.page = val;
    },
    onSubmitFilter() {
      this.findUser();
    },
    /**
     * @returns [
     *   {code: number},
     *   {msg:String},
     *   {val:[
     *     {name:String,role:Number},]
     *   }
     * ]
     */
    getList() {
      const _self = this;
      $.ajax({
        url: _self.baseURL.serverSrc + "get_user", // 后端地址
        type: "get",
        data: {},
        dataType: "json",
        success: function (data) {
          //后端返回的json数据（此处data为json对象）
          console.log("成功", data);
          _self.tableData = data;
        },
        error: function () {
          alert("异常");
        },
      });
    },
    /**
     * @returns [
     *   {code: number},
     *   {msg:String},
     *   {val:[
     *     {name:String,role:Number},]
     *   }
     * ]
     */
    findUser() {
      $.ajax({
        url: this.baseURL.serverSrc + "", // 后端地址
        type: "get",
        data: { name: this.filterForm.name },
        dataType: "json",
        success: function (data) {
          //后端返回的json数据（此处data为json对象）
          console.log("成功", data);
          this.tableData = data[2].value;
        },
        error: function () {
          alert("异常");
        },
      });
    },
    addUser() {
      this.addVisible = true;
      if (this.filterForm.name != null && this.filterForm.name != undefined) {
        this.form.name = this.filterForm.name;
      }
      console.log("addUser");
    },
    // handleChange(file, fileList) {
    //     this.form.user_avatar = fileList
    // },
    handleCancel() {
      this.addVisible = false;
      this.editVisible = false;
      this.form = {
        name: "",
        password: "",
        role: "",
      };
    },
    /**
     * @returns [{code: number},{msg:String}]
     */
    handleAddConfirm() {
      const _self = this;
      this.addVisible = false;
      console.log(this.form);
      $.ajax({
        url: _self.baseURL.serverSrc + "addUser", // 后端地址
        type: "post",
        data: {
          name: _self.form.name,
          password: _self.form.password,
          role: _self.form.role,
        },
        dataType: "json",
        success: function (data) {
          //后端返回的json数据（此处data为json对象）
          console.log("成功", data);
          if (data[0].code == 200) {
            _self.$notify({
              title: "提示",
              message: data[1].msg,
              type: "success",
              duration: 1500,
            });
            _self.getList()
          } else if (data[0].code == 300) {
            _self.$notify({
              title: "提示",
              message: data[1].msg,
              type: "error",
              duration: 1500,
            });
          } else if (data[0].code == 400) {
            _self.$notify({
              title: "提示",
              message: data[1].msg,
              type: "warning",
              duration: 1500,
            });
          }
        },
        error: function () {
          alert("异常");
        },
      });
      this.form = {
        name: "",
        password: "",
        role: "",
      };
    },
    /**
     * @returns [{code: number},{msg:String}]
     */
    handleEditConfirm() {
      const _self = this;
      this.editVisible = false;
      console.log(this.form);
      $.ajax({
        url: this.baseURL.serverSrc + "", // 后端地址
        type: "post",
        data: {
          name: _self.form.name,
          password: _self.form.password,
          role: _self.form.role,
        },
        dataType: "json",
        success: function (data) {
          //后端返回的json数据（此处data为json对象）
          console.log("成功", data);
          if (data[0].code == 200) {
            _self.$notify({
              title: "提示",
              message: data[1].msg,
              duration: 1500,
            });
          } else if (data[0].code == 300) {
            _self.$notify({
              title: "提示",
              message: data[1].msg,
              duration: 1500,
            });
          }
        },
        error: function () {
          alert("异常");
        },
      });
      this.form = {
        name: "",
        password: "",
        role: "",
      };
    },
  },
  components: {},
  mounted() {
    this.getList();
    this.userInfo = this.$store.state.userInfo;
  },
};
</script>
  
<style>
.user-table table td {
  float: none;
}

#user-table .user-table .el-table th,
#user-table .user-table .el-table tr {
  background-color: #fff;
}

.el-table th.gutter {
  display: table-cell !important;
}

.el-table th > .cell {
  text-align: center;
}

.page-box {
  position: absolute;
  bottom: 10px;
  right: 20px;
}
</style>
  