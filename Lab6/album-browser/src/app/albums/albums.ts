import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../service/album-service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums {
  loading = signal(false);
  albums = signal<Album[]>([]);
  error = signal('');

  constructor(private albumService: AlbumService){
    this.loadAlbums();
  }

  loadAlbums(){
    this.loading.set(true);
    this.albumService.getAlbums().subscribe({
      next: data => {
        this.albums.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load albums');
        this.loading.set(false);
      }
    });
  }

  deleteAlbum(id: number, event: MouseEvent): void{
    event.stopPropagation();
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums.update(albums => albums.filter(a => a.id !== id));
      },

      error: () => {
        this.error.set('delete failed');
      }
    })
  }
}
