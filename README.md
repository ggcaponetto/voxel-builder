# Voxel Builder
**3.7.5 beta 2022**<br>
**Babylon.js 5.0.0+**<br>

[ [Voxel Builder](https://nimadez.github.io/voxel-builder) ]

![screenshot](screenshot.jpg?raw=true "Screenshot")

Voxel-based 3D modeling application<br>
[Changelog](https://github.com/nimadez/voxel-builder/blob/main/CHANGELOG)

## Features

***Files***
- File I/O *(readable format)*
- Export GLB *(+vertex colors)*
- Quick Save and Restore
- Support file drag and drop
- Blender Importer [Script](https://github.com/nimadez/voxel-builder/blob/main/addons/blender-importer.py)

***Generator***
- Grid/Plane Generator
- Terrain Generator

***Voxelizer***
- Voxelize Model *(OBJ)*
- Voxelize Image *(JPG/PNG/Base64)*

***Symmetry***
- Symmetric Draw and Paint
- Symmetrize Voxels
- Mirror Voxels

***Modeling***
- Add *(+symmetry)*
- Remove *(+symmetry)*
- Transform *(+symmetry)*
- Normalize Position

***Painting***
- Paint *(+symmetry)*
- Eyedropper
- Bucket
- Color picker *(html and babylon.js wheel)*
- Color palette *(collect unique colors)*

***Layers***
- Group voxels by unique colors
- Layer Toolbox *(edit and manipulate layers)*
- Support files, memory and storage

***Bakery***
- Bake to mesh, clone, delete, hide, export GLB
- Collect variations before export
- Preview the output mesh

** *Voxel is a particle*

***Rendering***
- High-Quality Render mode *(not mobile friendly)*
- Cell, PBR and Standard materials

***More***
- Memory Steps *(record 10 steps)*
- Axis View *(+symmetry axis indicator)*
- Custom Grid
- Minimum dependency
- Single HTML file

***Supported Browsers***
- Electron
- Google Chrome
- Google Chrome for mobile devices
<br><sub>* *Tablet recommended for best experience*</sub>
<br><sub>* *PWA A2HS-ready (add to home screen)*</sub>

***Keyboard Shortcuts***
| Key | Action |
| :---: | ----------- |
| **SPACE** | Camera |
| **A** | Add |
| **T** | Transform |
| **R** | Remove |
| **P** | Paint |
| **B** | Bucket |
| **E** | Eyedropper |
| **F** | Fit Camera |
| **O** | Debug Mode |
| **`** | Minimal Interface |
| **0-9** | Load Memory Steps |
| **CTRL+Z** | Undo *(previous memory)* |
| **CTRL+X** | Redo *(next memory)* |

## History
```
3.6.0 -> major code rewrite
3.4.0 -> new features and ui/ux overhaul
3.0.0 -> choose SPS to build the voxels
```
###### 3.6.1 - Babylon.js 5.0.0 beta<br>
![screenshot](screenshots/screenshot361.jpg?raw=true "Screenshot")

###### 3.5.1 - Babylon.js 4.2.1<br>
![screenshot](screenshots/screenshot351.jpg?raw=true "Screenshot")

###### 3.2.0 - Babylon.js 4.0.0<br>
![screenshot](screenshots/screenshot320.jpg?raw=true "Screenshot")

## License
Code released under the [MIT license](https://github.com/nimadez/voxel-builder/blob/main/LICENSE).

## Credits
- [Babylon.js](https://www.babylonjs.com/)
- [Electron](https://www.electronjs.org/)
- [Google Material Icons](https://github.com/google/material-design-icons)
- [Droid Sans Font](https://www.android.com/)
- [Blender](https://blender.org/)

###### Available at [Babylon.js Demos](https://www.babylonjs.com/community/)
