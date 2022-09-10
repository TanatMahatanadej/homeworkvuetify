<template>
  <div class="home">
    <!-- <button @click="logout()">logout</button> -->

    <v-btn
    elevation="2"
    outlined
    rounded
    color = "red"
    dark
    @click="logout()"
    >logout</v-btn>


    <v-card>

      <v-card-title>
      Search
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="users"

      :search="search"
      :footer-props="{
        showFirstLastPage: true,
        firstIcon: 'mdi-arrow-collapse-left ',
        lastIcon: 'mdi-arrow-collapse-right ',
        prevIcon: 'mdi-minus',
        nextIcon: 'mdi-plus'
      }"
    >


      <template v-slot:top>
      <v-toolbar
        flat
      >

        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Item
            </v-btn>
          </template>


          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >


                    <v-text-field
                      v-model="editedItem.firstName"
                      label="First Name"
                    ></v-text-field>


                  </v-col>


                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >


                    <v-text-field
                      v-model="editedItem.lastName"
                      label="Last Name"
                    ></v-text-field>


                  </v-col>


                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >


                    <v-text-field
                      v-model="editedItem.email"
                      label="Email"
                    ></v-text-field>


                  </v-col>


                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >


                    <v-text-field
                      v-model="editedItem.tel"
                      label="Tel."
                    ></v-text-field>


                  </v-col>





                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>


            </v-card-actions>

          </v-card>
        </v-dialog>


        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

      <!-- ชื่อ slot เขียนไม่ถูกครับ ใน document คือ item.<name> -->
      <!-- ตัวอย่าง v-slot:[`item.ชื่อ value`]  อันเดิมที่ใช้เป็น v-slot:actions -->
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>




      <template v-slot:[`item.email`]="{item}">
        {{item.email || '-'}}
      </template>
      <template v-slot:[`item.tel`]="{item}">
        {{item.tel || '-'}}
      </template>
      <template v-slot:[`item.no`]="{index}">
        {{index+1}}
      </template>



    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="loadUserData()"
      >
        Reset
      </v-btn>
    </template>


        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>




    </v-data-table>
      <!-- <thead>
        <tr>
          <th>No.</th>
          <th> Firstname</th>
          <th> Lastname </th>
          <th> Email </th>
          <th> Telephone </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user,i) in users" :key="i">
          <td>{{i+1}}</td>
          <td>{{user.firstName}}</td>
          <td>{{user.lastName}}</td>
          <td>{{user.Email || '-'}}</td>
          <td>{{user.Telephone || '-'}}</td>
        </tr>
      </tbody> -->




    </v-card>
      {{auth.firstName}}
      {{auth.lastName}}
      <v-icon> mdi-account </v-icon>

  </div>



</template>

<script>
// @ is an alias to /src
import {mapActions,mapGetters} from 'vuex'
import axios from 'axios'


export default {

  name: 'HomeView',
  data () {
    return {
      dialog: false,
      dialogDelete: false,
      users: [
        {
          firstName: 'AA',
          lastName: 'AA',
          email: 'BB',
          tel: '090'
        },
        {
          firstName: 'AA',
          lastName: 'AA',
          email: 'BB',
          tel: '090'
        },
        {
          firstName: 'AA',
          lastName: 'AA',
          email: 'BB',
          tel: '090'
        },
        {
          firstName: 'AA',
          lastName: 'AA',
          email: 'BB',
          tel: '090'
        },
        {
          firstName: 'AA',
          lastName: 'AA',
          email: 'BB',
          tel: '090'
        },
        {
          firstName: 'AA',
          lastName: 'AA',
          email: 'BB',
          tel: '090'
        },
        {
          firstName: 'AA',
          lastName: 'AA',
          email: 'BB',
          tel: '090'
        }
      ],
      search: '',
      headers: [
        {
          text: "NO.",
          value: "no"
        },
        {
          text: "FirstName",
          value: "firstName"
        },
        {
          text: "LastName",
          value: "lastName"
        },
        {
          text: "Email",
          value: "email"
        },
        {
          text: "Telephone",
          value: "tel"
        },
        {
          text: 'Actions',
          value: 'actions',
          sortable: false
        },
      ],
      editedIndex: -1,
      editedItem: {
        firstName: '',
        lastName: '',
        email: '',
        tel: ''
      },
      defaultItem: {
        firstName: '',
        lastName: '',
        email: '',
        tel: ''
    },
  }},
  computed: {
      ...mapGetters({
      auth:'auth/auth'
    }),
    formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
  },


  mounted () {
    // this.loadUserData()
  },
  watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

  methods: {
    ...mapActions({
      setAuth:'auth/setAuth'
    }),
    async loadUserData () {
      try {
        const { data } = await axios.get('http://localhost:3000/user',{
          headers: {
            'Authorization': `token ${this.auth.accessToken}`
          }
        })
        // console.log(data)
        // console.log(data.data)
        // console.log(data.data[0].firstName)
        this.users = data.data

      } catch (error) {
        console.error()
      }
    },logout () {
        alert('ออกจากระบบสำเร็จ')
        this.setAuth({
          accessToken: ''
        })
        this.$router.push({ name: 'Login' })
    },



    editItem (item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.users.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      async save () {
        // if (this.editedIndex > -1) {
        //   Object.assign(this.users[this.editedIndex], this.editedItem)

        // } else {
        //   this.users.push(this.editedItem)
        // }
        // try {
        // const { data } = await axios.post('http://localhost:3000/user',{
          
        // // })
       
        try {
          await axios.post('http://localhost:3000/user',{
              firstName: this.editedItem.firstName,
              lastName: this.editedItem.lastName,
              email: this.editedItem.email,
              tel: this.editedItem.tel

          })
              this.clearForm()
              // this.$router.push({ path:'/'})
              this.loadUserData()
              alert('create success')
            } catch (error) {
                console.error('[ERROR] create data',error)
            }
        
          this.close()
      },
      clearForm () {
        this.editItem = {
          firstName: '',
          lastName: '',
          email: '',
          tel: ''
        }
      }
  }
}

</script>

<style scoped>
  table {
    width: 100%;
  }
  tbody tr td {
    text-align: center;
  }
</style>
