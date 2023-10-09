import { Cycle } from './reduces'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'add_new_cycle',
  INTERRUPT_CURRENT_CYCLE = 'interrupt_current_cycle',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'mark_current_cycle_as_finished',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}
