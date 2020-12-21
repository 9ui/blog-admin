<template>
  <BasicModal
    :footer="null"
    title="锁定密码"
    v-bind="$attrs"
    :class="prefixCls"
    @register="register"
  >
    <div :class="`${prefixCls}__entry`">
      <div :class="`${prefixCls}__header`">
        <img src="/@/assets/images/header.jpg" :class="`${prefixCls}__header-img`" />
        <p :class="`${prefixCls}__header-name`">{{ getRealName }}</p>
      </div>

      <BasicForm @register="registerForm" layout="vertical" />

      <div :class="`${prefixCls}__footer`">
        <a-button type="primary" block class="mt-2" @click="handleLock"> 锁定 </a-button>
      </div>
    </div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, computed } from 'vue';

  import { useDesign } from '/@/hooks/web/useDesign';
  import { BasicModal, useModalInner } from '/@/components/Modal/index';
  import { BasicForm, useForm } from '/@/components/Form/index';

  import { userStore } from '/@/store/modules/user';
  import { lockStore } from '/@/store/modules/lock';
  export default defineComponent({
    name: 'LockModal',
    components: { BasicModal, BasicForm },

    setup() {
      const { prefixCls } = useDesign('header-lock-modal');

      const getRealName = computed(() => {
        return userStore.getUserInfoState?.realName;
      });
      const [register, { closeModal }] = useModalInner();

      const [registerForm, { validateFields, resetFields }] = useForm({
        showActionButtonGroup: false,
        schemas: [
          {
            field: 'password',
            label: '锁屏密码',
            component: 'InputPassword',
            required: true,
          },
        ],
      });

      async function handleLock() {
        const values = (await validateFields()) as any;
        const password: string | undefined = values.password;
        closeModal();

        lockStore.commitLockInfoState({
          isLock: true,
          pwd: password,
        });
        await resetFields();
      }

      return {
        prefixCls,
        getRealName,
        register,
        registerForm,
        handleLock,
      };
    },
  });
</script>
<style lang="less">
  @import (reference) '../../../../../design/index.less';
  @prefix-cls: ~'@{namespace}-header-lock-modal';

  .@{prefix-cls} {
    &__entry {
      position: relative;
      height: 240px;
      padding: 130px 30px 60px 30px;
      background: #fff;
      border-radius: 10px;
    }

    &__header {
      position: absolute;
      top: 0;
      left: calc(50% - 45px);
      width: auto;
      text-align: center;

      &-img {
        width: 70px;
        border-radius: 50%;
      }

      &-name {
        margin-top: 5px;
      }
    }

    &__footer {
      text-align: center;
    }
  }
</style>
