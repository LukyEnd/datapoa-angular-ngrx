import * as miniBusLoading from '../../actions/loading.actions';
import * as miniBusAction from '../../actions/mini-bus.actions';
import * as miniBusReducer from '../../reducers/mini-bus.reducer';
import { initialState } from '../../reducers/mini-bus.reducer';

describe('Mini Bus Reducer', () => {
  it('should return the previous state', () => {
    const action = {} as any;
    const result = miniBusReducer.miniBusReducer(initialState, action);
    expect(result).toBe(initialState);
  });

  it('miniBusData should have a miniBusData', () => {
    const action = miniBusAction.MiniBussSuccess({ miniBusData: [] });
    const state = miniBusReducer.miniBusReducer(initialState, action);
    expect(state.miniBusData).toEqual([]);
  });

  it('error should be error', () => {
    const action = miniBusAction.MiniBussFailure({ error: '' });
    const state = miniBusReducer.miniBusReducer(initialState, action);
    expect(state.error).toBe('');
  });

  it('loading should be loading', () => {
    const action = miniBusLoading.LoderStatusSuccess({ loading: true });
    const state = miniBusReducer.miniBusReducer(initialState, action);
    expect(state.loading).toBe(true);
  });
});
