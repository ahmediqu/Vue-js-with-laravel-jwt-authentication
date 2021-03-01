<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            Add a new item
            <button type="button" class="btn-close" @click="close" aria-label="Close modal">x</button>
          </slot>
        </header>
        <section class="modal-body" id="modalDescription">
          <slot name="body">
            <div v-if="errors.length">
              {{ errors }}
            </div>
            <form>
              <div class="form-group">
                <label>Title</label>
                <input type="text" v-model="formData.title" class="form-control">
              </div>
              <div class="mb-3">
                <label>Price</label>
                <input type="text" v-model="formData.price" class="form-control">
              </div>
              <div class="mb-3">
                <label>Description</label>
                <textarea cols="3" rows="1" class="form-control" v-model="formData.description"></textarea>
              </div>
              <div class="mb-3">
                <label>Upload Product</label>
                <input type="file" class="form-control" @change="onFileChange">
              </div>
              <div class="mb-3" v-if="product">
                <button class="btn btn-info" type="button" @click.prevent="updateForm(product)">Update</button>
              </div>
              <div class="mb-3" v-else>
                <button class="btn btn-info" type="button" @click.prevent="formSubmit">Save</button>
              </div>
            </form>
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">

            <button type="button" class="btn-green" @click="close" aria-label="Close modal"> Close</button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import {ProductCreateEditMixin} from "../../mixins/ProductCreateEditMixin";

export default {
  name: "CreateEditModal",
  mixins: [ProductCreateEditMixin],
}
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 50%;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4AAE9B;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
}
</style>