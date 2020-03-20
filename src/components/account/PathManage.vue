<template>
  <div class="pathManage">
    <div class="pathManageText">
       通道管理
    </div>
    <div style="margin-top:30px;margin-bottom:20px">
      <a-form  layout="inline" :form="form"  @submit="handleSubmit">
        <a-form-item label="通道查询">
          <a-input
            placeholder="通道名称/IP地址/注册号码"
            v-decorator="['通道查询', { rules: [{ required: false, message: '通道名称/IP地址/注册号码' }] }]"
          />
        </a-form-item>
        <a-form-item label="注册状态">
          <a-select style="width:174px"
            v-decorator="[
              '注册状态',
              { rules: [{ required: false, message: '请选择' }] },
            ]"
            placeholder="请选择"
            @change="handleSelectChange"
          >
            <a-select-option value="请选择">
              请选择
            </a-select-option>
            <a-select-option value="male">
              成功
            </a-select-option>
            <a-select-option value="female">
              失败
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="对接项目">
          <a-select style="width:174px"
            v-decorator="[
              '对接项目',
              { rules: [{ required: false, message: '请选择' }] },
            ]"
            placeholder="请选择"
            @change="handleSelectChange"
          >
            <a-select-option value="请选择">
              请选择
            </a-select-option>
            <a-select-option value="male">
              项目1
            </a-select-option>
            <a-select-option value="female">
              项目2
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 1, offset: 10 }">
          <a-button type="primary" html-type="submit">
            查询
          </a-button>
        </a-form-item>
      </a-form>
    </div>
    <div style="margin-top:20px">
      <span>查询数量：</span>
      <span>15</span>
      <div style="display:inline-block;float:right">
        <a-button type="primary" style="margin-right:15px">新建</a-button>
        <a-button>编辑</a-button>
      </div>
    </div>
    <div>
      <a-table :columns="columns" :dataSource="data" bordered>
        <template
          v-for="col in ['name', 'age', 'address']"
          :slot="col"
          slot-scope="text, record"
        >
          <div :key="col">
            <a-input
              v-if="record.editable"
              style="margin: -5px 0"
              :value="text"
              @change="e => handleChange(e.target.value, record.key, col)"
            />
            <template v-else
              >{{text}}</template
            >
          </div>
        </template>
        <template slot="operation" slot-scope="text, record">
          <div class="editable-row-operations">
            <span v-if="record.editable">
              <a @click="() => save(record.key)">Save</a>
              <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.key)">
                <a>Cancel</a>
              </a-popconfirm>
            </span>
            <span v-else>
              <a :disabled="editingKey !== ''" @click="() => edit(record.key)">Edit</a>
            </span>
          </div>
        </template>
      </a-table>
    </div>
  </div>

</template>

<script>
const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '25%',
      scopedSlots: { customRender: 'name' },
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      scopedSlots: { customRender: 'age' },
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '40%',
      scopedSlots: { customRender: 'address' },
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      scopedSlots: { customRender: 'operation' },
    },
  ];

  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i.toString(),
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }
export default {
  name: 'PathManage',
  props: {
    msg: String
  },
   data() {
     this.cacheData = data.map(item => ({ ...item }));
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
       data,
        columns,
        editingKey: '',
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },
    handleChange(value, key, column) {
        const newData = [...this.data];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
          target[column] = value;
          this.data = newData;
        }
      },
      edit(key) {
        const newData = [...this.data];
        const target = newData.filter(item => key === item.key)[0];
        this.editingKey = key;
        if (target) {
          target.editable = true;
          this.data = newData;
        }
      },
      save(key) {
        const newData = [...this.data];
        const newCacheData = [...this.cacheData];
        const target = newData.filter(item => key === item.key)[0];
        const targetCache = newCacheData.filter(item => key === item.key)[0];
        if (target && targetCache) {
          delete target.editable;
          this.data = newData;
          Object.assign(
            targetCache,
            target
          );
          this.cacheData = newCacheData;
        }
      },
      cancel(key) {
        const newData = [...this.data];
        const target = newData.filter(item => key === item.key)[0];
        this.editingKey = '';
        if (target) {
          Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
          delete target.editable;
          this.data = newData;
        }
      },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pathManage{
    width: 100%;
    height: 100%;
    border-radius: 5px;
    /* border: 1px solid red; */
    background: #fff;
    padding: 20px;
    box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
  }
  .pathManageText{
      font-size: 18px;
      font-weight: 600;
      border-bottom: 1px solid #ccc;
      height: 65px;
      line-height: 40px;
  }
  .editable-row-operations a {
    margin-right: 8px;
  }

</style>
