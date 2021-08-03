<template>
  <CRow>
    <CCol col="12" xl="8">
      <CCard>
        <CCardHeader>
          Users
        </CCardHeader>
        <CCardBody>
          <CDataTable
            hover
            striped
            :items="users"
            :fields="fields"
            :items-per-page="5"
            clickable-rows
            :active-page="activePage"
            :pagination="{ doubleArrows: false, align: 'center'}"
            @page-change="pageChange"
          >
            <template #status="data">
              <td>
                <CBadge :color="getBadge(data.item.status)">
                  {{data.item.status}}
                </CBadge>
              </td>
            </template>
            <template #actions="data">
              <td>
                  <CButtonGroup>
                      <CButton size="sm" color="info" v-on:click="editUser(data.item.id)">
                          <CIcon name="cib-facebook"/>
                      </CButton>
                      <CButton size="sm" color="danger">
                          <CIcon name="icon-facebook"/>
                      </CButton>
                  </CButtonGroup>
              </td>
            </template>
          </CDataTable>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Users',
  data () {
    return {
      fields: [
        { key: 'id' },
        { key: 'username', label: 'Name', _classes: 'font-weight-bold' },
        { key: 'registered' },
        { key: 'role' },
        { key: 'status' },
        { key: 'actions' },
      ],
      activePage: 1
    }
  },
    computed: {
      ...mapState(['users'])
    },
  watch: {
    $route: {
      immediate: true,
      handler (route) {
        if (route.query && route.query.page) {
          this.activePage = Number(route.query.page)
        }
      }
    }
  },
    created() {
        this.$store.dispatch('getUsers');
    },
    methods: {
    getBadge (status) {
      switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: 'primary'
      }
    },
    // rowClicked (item, index) {
    //   this.$router.push({path: `users/${index + 1}`})
    // },
    pageChange (val) {
      this.$router.push({ query: { page: val }})
    },
      editUser (id) {
          console.log(id);
      },
  }
}
</script>
