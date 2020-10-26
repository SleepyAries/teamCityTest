/**
 *
 *
 * @flow
 */
export default {
  '/': {
    exact: true,
    render: async () => import('./widgets/toolbar2/demo'),
  },
};
