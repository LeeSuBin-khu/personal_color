import numpy as np 
import cv2 as cv

img_color = cv.imread('cool_summer.png') 
print('shape: ', img_color.shape) 
height, width = img_color.shape[:2] 

img_hsv = cv.cvtColor(img_color, cv.COLOR_BGR2HSV)

lower_blue = (120-10, 50, 50)
upper_blue = (120+10, 255, 255)
img_mask = cv.inRange(img_hsv, lower_blue, upper_blue)
img_result = cv.bitwise_and(img_color, img_color, mask = img_mask) 

cv.imshow('img_origin', img_color) 
cv.imshow('img_mask', img_mask)
cv.imshow('img_color', img_result)

cv.waitKey(0) 
cv.destroyAllWindows()
