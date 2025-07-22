import { Component, linkedSignal, model, resource, computed  } from "@angular/core";

import {
  File,
  FilePreviewOutput,
  ZzzVoyageComponent,
  RenameFile,
  VoyageIconComponent,
} from "./zzz-voyage/src/public-api";

import { FileExplorerService } from "../../../services/explorer.service";



@Component({
    selector: 'log-tables',
    imports: [ZzzVoyageComponent],
    templateUrl: './explorer.component.html',
    styleUrls: ['./explorer.component.scss'],
  })


export class ExplorerComponent {

  title = 'new_demo';


  constructor(private fileService: FileExplorerService) {}



  //filesResource = resource({
  //  request: () => ({ path: encodeURIComponent(this.path()) }),
  //  loader: async ({ request }) => {
  //    const response = await fetch('/api/fileexplorer/ls?path=' + request.path);
  //    return (await response.json()) as File[];
  //  },
  //});


  filesResource = resource({
    request: () => ({ path: encodeURIComponent(this.path()) }),
    loader: async ({ request }) => {
      const response = await this.fileService.listFiles(request.path).toPromise();
      
      return (response ?? []).map((file: any) => ({
        ...file,
        isDirectory: file.isDirectory ?? false,
        isFile: file.isFile ?? false,
        isSymbolicLink: file.isSymbolicLink ?? false,
        modifiedDate: file.modifiedDate ?? null,
      })) as File[];
    },
  });

  path = model('/');
  files = computed(() => this.filesResource.value() ?? []);

  preview({ path, cb }: FilePreviewOutput) {
    if (path.endsWith("light.png")) {
      fetch("light.png").then((response) =>
        response.blob().then((blob) => cb(blob)),
      );
    } else if (path.endsWith("dark.png")) {
      fetch("dark.png").then((response) =>
        response.blob().then((blob) => cb(blob)),
      );
    } else {
      //const blob = new Blob([filesContentMock[path]], {
      //  type: "text/plain",
      //});
      //cb(blob);
      const url = encodeURIComponent(path);
      fetch('/api/fileexplorer/open?file=' + url).then(async (value) => {
        const blob = await value.blob();
        cb(blob);
      });
      



    }
  }

  

  async open(path: string) {
    console.log('adding to queue:' + path)
    try {
      await this.fileService.loadFile(path).toPromise();
        console.log('after load file); '); 
    } catch (error) {
      console.error('Error loading file:', error);
      // You might want to show an error message to the user here
    }

  }

  //rename(renameFile: RenameFile) {
  //  console.log('renaming file:' + this.path() + '/' + renameFile.file.name + ' to ' + this.path() + '/' + renameFile.newName);
  //}

  async rename(renameFile: RenameFile) {
    const oldPath = `${this.path()}/${renameFile.file.name}`;
    const newPath = `${this.path()}/${renameFile.newName}`;
    console.log('renaming file:' + this.path() + '/' + renameFile.file.name + ' to ' + this.path() + '/' + renameFile.newName);
    
    try {
      await this.fileService.renameFile(oldPath, newPath).toPromise();
      console.log('after await rename); '); 


      // Refresh the file list by updating the path signal
      // This will trigger a new request since filesResource depends on path
      this.path.set(this.path());
      const currentPath = this.path();

      const files = await this.fileService.listFiles(currentPath).toPromise();
      console.log('after await getfiles); '); 

      const setfiles = (files ?? []).map((file: any) => ({
        ...file,
        isDirectory: file.isDirectory ?? false,
        isFile: file.isFile ?? false,
        isSymbolicLink: file.isSymbolicLink ?? false,
        modifiedDate: file.modifiedDate ?? null,
      })) as File[];

      this.filesResource.set(setfiles);
    

      
    } catch (error) {
      console.error('Error renaming file:', error);
      // You might want to show an error message to the user here
    }
  }


  deleteFile(f: File) {

  }


}
