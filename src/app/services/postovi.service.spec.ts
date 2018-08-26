import { TestBed, inject } from '@angular/core/testing';

import { PostoviService } from './postovi.service';

describe('PostoviService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostoviService]
    });
  });

  it('should be created', inject([PostoviService], (service: PostoviService) => {
    expect(service).toBeTruthy();
  }));
});
