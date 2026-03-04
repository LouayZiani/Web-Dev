import { CommonModule } from '@angular/common';
import { Component, signal, effect } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../service/album-service';
import { Photo } from '../models/photo.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotos {
  loading = signal(false);
  error = signal('');
  photos = signal<Photo[]>([]);
  albumId = signal<number | null>(null);
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {
    const idSignal = toSignal(
  this.route.paramMap.pipe(
    map(params => {
      const raw = params.get('id');           // string | null
      if (raw === null) return null;          // no id yet
      const id = Number(raw);
      return Number.isNaN(id) ? null : id;    // invalid -> null
    })
  ),
  { initialValue: null }
);

effect(() => {
  const id = idSignal(); 

  if (id === null || id <= 0) {
    this.albumId.set(null);
    this.photos.set([]);
    this.loading.set(false);
    this.error.set('Invalid album id.');
    return;
  }

    this.albumId.set(id);
    this.error.set('');
    this.loadPhotos(id); 
  });
  }

  loadPhotos(id: number) {
    this.loading.set(true);

    this.albumService.getAlbumPhotos(id).subscribe({
      next: data => {
        this.photos.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load photos.');
        this.loading.set(false);
      }
    });
  }

  back() {
    const id = this.albumId();
    if (id) this.router.navigate(['/albums', id]);
    else this.router.navigate(['/albums']);
  }

  imgFallback(event: Event, id: number) {
    const img = event.target as HTMLImageElement;
    img.src = `https://picsum.photos/seed/${id}/150/150`;
  }
}