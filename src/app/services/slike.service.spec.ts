import { TestBed, inject } from '@angular/core/testing';

import { SlikeService } from './slike.service';

describe('SlikeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlikeService]
    });
  });

  it('should be created', inject([SlikeService], (service: SlikeService) => {
    expect(service).toBeTruthy();
  }));
});


