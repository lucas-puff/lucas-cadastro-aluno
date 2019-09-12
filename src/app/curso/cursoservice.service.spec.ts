import { TestBed } from '@angular/core/testing';

import { CursoserviceService } from './cursoservice.service';

describe('CursoserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CursoserviceService = TestBed.get(CursoserviceService);
    expect(service).toBeTruthy();
  });
});
