// file-explorer.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FileExplorerService {
    constructor(private http: HttpClient) {}

    renameFile(oldPath: string, newPath: string) {
        return this.http.post('/api/fileexplorer/rename', {
            oldPath,
            newPath
        });
    }

    loadFile(path: string) {
        return this.http.post('/api/fileexplorer/load', {
            path
        });
    }

    listFiles(path: string) {
        return this.http.get<File[]>('/api/fileexplorer/ls?path=' + encodeURIComponent(path));
    }
}