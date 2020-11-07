import { ISession } from '../shared';
import { SessionListComponent } from "./session-list.component"

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let mockAuthService, mockVoterService;

  beforeEach( () => {
    component = new SessionListComponent(mockAuthService, mockVoterService);
  })

  describe('ngOnChanges', () => {
    it('should filter the sessions correct', () => {
      component.sessions = <ISession[]>[
        {name: 'session 1', level: 'indermediate'},
        {name: 'session 3', level: 'intermediate'},
        {name: 'session 2', level: 'beginner'}];

      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.visibleSessions.length).toBe(3);
      expect(component.visibleSessions[2].name).toBe('session 3');
    })
  })
})
