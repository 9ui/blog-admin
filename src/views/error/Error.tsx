import type { PropType } from 'vue';

import { defineComponent, computed, ref, unref } from 'vue';

import { useRoute } from 'vue-router';

import { ExceptionEnum } from '/@/enums/exceptionEnum';

import './error.less';

interface MapValue {
  title: string;
  subTitle: string;
  btnText?: string;
  icon?: string;
  handler?: Fn;
  status?: string;
}

export default defineComponent({
  name: 'ErrorPage',
  props: {
    // 状态码
    status: {
      type: Number as PropType<number>,
      default: ExceptionEnum.PAGE_NOT_FOUND,
    },
  },
  setup(props) {
    const statusMapRef = ref(new Map<string | number, MapValue>());
    const { query } = useRoute();
    const getStatus = computed(() => {
      const { status: routeStatus } = query;
      const { status } = props;
      return Number(routeStatus) || status;
    });
    const getMapValue = computed(
      (): MapValue => {
        return unref(statusMapRef).get(unref(getStatus)) as MapValue;
      }
    );
    return () => {
      const { status } = unref(getMapValue) || {};
      return <div>{status}</div>;
    };
  },
});
