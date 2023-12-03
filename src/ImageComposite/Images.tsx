import { Layer, Stage, Image } from "react-konva";
import {
  CompleteDimensions,
  DisplayImage,
  HeightOpenDimensions,
} from "./types";
import { useImages } from "./use-images";
import { useLayoutEffect, useState } from "react";
import { getVisibleImages, getHeightFromWidth, getImagePosition } from "./misc";

// TODO - implement margins - implement fixed height/width

export function Images({
  images,
  dimensions,
  margins,
}: {
  images: DisplayImage[];
  dimensions: HeightOpenDimensions;
  margins: "none";
}) {
  const [calculatedDimensions, setDimensions] = useState<CompleteDimensions>({
    width: dimensions.width,
    height: dimensions.width,
  });

  const [imageElements, imageUpdate] = useImages(
    Object.fromEntries(images.map((val) => [val.id, val.url]))
  );

  useLayoutEffect(() => {
    const calculatedHeight = Math.max(
      ...getVisibleImages(images, imageElements).map((id) => {
        return getHeightFromWidth(
          dimensions.width,
          images[id].position,
          imageElements[id].element as HTMLImageElement
        );
      })
    );
    setDimensions({
      width: dimensions.width,
      height: calculatedHeight,
    });
    if (dimensions.setHeight) dimensions.setHeight(calculatedHeight);
  }, [imageUpdate, imageElements, images, dimensions]);

  return (
    <Stage
      width={calculatedDimensions.width}
      height={calculatedDimensions.height}
    >
      <Layer>
        {getVisibleImages(images, imageElements).map((id) => {
          <Image
            image={imageElements[id].element}
            {...getImagePosition(
              calculatedDimensions,
              images[id].position,
              imageElements[id].element as HTMLImageElement
            )}
            key={id}
            alt={id}
          ></Image>;
        })}
      </Layer>
    </Stage>
  );
}
