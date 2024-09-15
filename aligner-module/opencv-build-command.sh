set -ex

mkdir buildout
cd buildout
emcmake cmake -DPYTHON_DEFAULT_EXECUTABLE=/usr/bin/python3 -DENABLE_PIC=FALSE -DCMAKE_BUILD_TYPE=Release -DCPU_BASELINE='' -DCMAKE_INSTALL_PREFIX=/usr/local -DCPU_DISPATCH='' -DCV_TRACE=OFF -DBUILD_SHARED_LIBS=OFF -DWITH_1394=OFF -DWITH_ADE=ON -DWITH_VTK=OFF -DWITH_EIGEN=OFF -DWITH_FFMPEG=OFF -DWITH_GSTREAMER=OFF -DWITH_GTK=OFF -DWITH_GTK_2_X=OFF -DWITH_IPP=OFF -DWITH_JASPER=OFF -DWITH_JPEG=ON -DWITH_WEBP=ON -DBUILD_WEBP=ON -DWITH_OPENEXR=OFF -DWITH_OPENGL=OFF -DWITH_OPENVX=OFF -DWITH_OPENNI=OFF -DWITH_OPENNI2=OFF -DWITH_PNG=ON -DWITH_TBB=OFF -DWITH_TIFF=OFF -DWITH_V4L=OFF -DWITH_OPENCL=OFF -DWITH_OPENCL_SVM=OFF -DWITH_OPENCLAMDFFT=OFF -DWITH_OPENCLAMDBLAS=OFF -DWITH_GPHOTO2=OFF -DWITH_LAPACK=OFF -DWITH_ITT=OFF -DWITH_QUIRC=OFF -DBUILD_ZLIB=ON -DBUILD_opencv_apps=OFF -DBUILD_opencv_calib3d=ON -DBUILD_opencv_dnn=ON -DBUILD_opencv_features2d=ON -DBUILD_opencv_flann=ON -DBUILD_opencv_gapi=OFF -DBUILD_opencv_ml=OFF -DBUILD_opencv_photo=ON -DBUILD_opencv_imgcodecs=ON -DBUILD_opencv_shape=OFF -DBUILD_opencv_videoio=OFF -DBUILD_opencv_videostab=OFF -DBUILD_opencv_highgui=OFF -DBUILD_opencv_superres=OFF -DBUILD_opencv_stitching=OFF -DBUILD_opencv_java=OFF -DBUILD_opencv_js=OFF -DBUILD_opencv_python2=OFF -DBUILD_opencv_python3=OFF -DBUILD_EXAMPLES=ON -DBUILD_PACKAGE=OFF -DBUILD_TESTS=ON -DBUILD_PERF_TESTS=ON -DENABLE_CXX17=ON -DBUILD_opencv_imgcodecs=ON -DCMAKE_TOOLCHAIN_FILE='/emsdk/upstream/emscripten/cmake/Modules/Platform/Emscripten.cmake' -DBUILD_DOCS=OFF -DWITH_PTHREADS_PF=ON -DCV_ENABLE_INTRINSICS=ON -DBUILD_WASM_INTRIN_TESTS=OFF -DCMAKE_C_FLAGS='-s WASM=1 -fwasm-exceptions -s SINGLE_FILE=1 -s USE_PTHREADS=1 -s PTHREAD_POOL_SIZE=16 -msimd128 -DOPENCV_HAVE_FILESYSTEM_SUPPORT=1 -s EXPORTED_FUNCTIONS="['_malloc','_free']"' -DCMAKE_CXX_FLAGS='-s WASM=1 -fwasm-exceptions -s SINGLE_FILE=1 -s USE_PTHREADS=1 -s PTHREAD_POOL_SIZE=16 -msimd128 -DOPENCV_HAVE_FILESYSTEM_SUPPORT=1 -s EXPORTED_FUNCTIONS="['_malloc','_free']"' /src
emmake make