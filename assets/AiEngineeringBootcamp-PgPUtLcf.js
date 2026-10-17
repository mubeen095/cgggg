import{c as Te,r as R,j as o,a as $i,X as qi}from"./index-k2gHK_ch.js";import{L as Xi}from"./Layout-DhncUiB8.js";import{A as ve}from"./arrow-right-Bj-sKtkX.js";import{A as va}from"./arrow-left-BwWhufII.js";import{A as Ct}from"./index-h5zDf0zy.js";import{m as At}from"./proxy-DeZWRETb.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=Te("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=Te("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=Te("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=Te("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=Te("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=Te("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=Te("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=Te("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);function ya(e){let t=e.replace("#","");(t.length===3||t.length===4)&&(t=t.split("").map(n=>n+n).join(""));const a=t.length>=8?parseInt(t.slice(6,8),16)/255:1;return[parseInt(t.slice(0,2),16)/255,parseInt(t.slice(2,4),16)/255,parseInt(t.slice(4,6),16)/255,a]}function di(e,t,a){e/=255,t/=255,a/=255;const n=Math.max(e,t,a),i=Math.min(e,t,a),s=n-i;let r=0;const c=n===0?0:s/n;return s!==0&&(n===e?r=((t-a)/s+6)%6:n===t?r=(a-e)/s+2:r=(e-t)/s+4,r/=6),[r,c,n]}function ui(e,t,a){const n=Math.floor(e*6),i=e*6-n,s=a*(1-t),r=a*(1-i*t),c=a*(1-(1-i)*t);let l=0,d=0,u=0;switch(n%6){case 0:l=a,d=c,u=s;break;case 1:l=r,d=a,u=s;break;case 2:l=s,d=a,u=c;break;case 3:l=s,d=r,u=a;break;case 4:l=c,d=s,u=a;break;case 5:l=a,d=s,u=r;break}return[Math.round(l*255),Math.round(d*255),Math.round(u*255)]}const Ki=66,Zi=66,en=1500,tn=1,wa=16,an=96,nn=2,on=0,rn=1,qe={colorBack:"#00000000",speed:1,repetition:1.5,softness:.05,shiftRed:.3,shiftBlue:.3,distortion:.1,contour:.4,angle:90,shape:on,scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0,fit:rn},sn={name:"chromatic",modes:{dark:{...qe,colorTint:"#88ccff2e",shiftRed:.75,shiftBlue:.75,repetition:2,softness:.09,shaderOpacity:1},light:{...qe,colorTint:"#66b0ff99",shiftRed:.6,shiftBlue:.6,shaderOpacity:1}}},ln={name:"silver",modes:{dark:{...qe,colorTint:"#ffffff66",shaderOpacity:.88},light:{...qe,colorTint:"#ffffff40",shaderOpacity:1}}},cn={name:"gold",modes:{dark:{...qe,colorTint:"#ffcc55cc",speed:.85,shaderOpacity:.92},light:{...qe,colorTint:"#f7d488aa",shaderOpacity:1}}},hi={chromatic:sn,silver:ln,gold:cn},dn=`
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`,un=`
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`,hn=`
  color += 1. / 256. * (fract(sin(dot(.014 * gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453123) - .5);
`,mn=`
vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
    -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`,pn=`#version 300 es
precision mediump float;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform vec2 u_resolution;
uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colorTint;

uniform float u_softness;
uniform float u_repetition;
uniform float u_shiftRed;
uniform float u_shiftBlue;
uniform float u_distortion;
uniform float u_contour;
uniform float u_angle;

uniform float u_shape;
uniform bool u_isImage;

in vec2 v_objectUV;
in vec2 v_responsiveUV;
in vec2 v_responsiveBoxGivenSize;
in vec2 v_imageUV;

out vec4 fragColor;

${dn}
${un}
${mn}

float getColorChanges(float c1, float c2, float stripe_p, vec3 w, float blur, float bump, float tint) {

  float ch = mix(c2, c1, smoothstep(.0, 2. * blur, stripe_p));

  float border = w[0];
  ch = mix(ch, c2, smoothstep(border, border + 2. * blur, stripe_p));

  if (u_isImage == true) {
    bump = smoothstep(.2, .8, bump);
  }
  border = w[0] + .4 * (1. - bump) * w[1];
  ch = mix(ch, c1, smoothstep(border, border + 2. * blur, stripe_p));

  border = w[0] + .5 * (1. - bump) * w[1];
  ch = mix(ch, c2, smoothstep(border, border + 2. * blur, stripe_p));

  border = w[0] + w[1];
  ch = mix(ch, c1, smoothstep(border, border + 2. * blur, stripe_p));

  float gradient_t = (stripe_p - w[0] - w[1]) / w[2];
  float gradient = mix(c1, c2, smoothstep(0., 1., gradient_t));
  ch = mix(ch, gradient, smoothstep(border, border + .5 * blur, stripe_p));

  // Tint color is applied with color burn blending
  ch = mix(ch, 1. - min(1., (1. - ch) / max(tint, 0.0001)), u_colorTint.a);
  return ch;
}

float getImgFrame(vec2 uv, float th) {
  float frame = 1.;
  frame *= smoothstep(0., th, uv.y);
  frame *= 1.0 - smoothstep(1. - th, 1., uv.y);
  frame *= smoothstep(0., th, uv.x);
  frame *= 1.0 - smoothstep(1. - th, 1., uv.x);
  return frame;
}

float blurEdge3x3(sampler2D tex, vec2 uv, vec2 dudx, vec2 dudy, float radius, float centerSample) {
  vec2 texel = 1.0 / vec2(textureSize(tex, 0));
  vec2 r = radius * texel;

  float w1 = 1.0, w2 = 2.0, w4 = 4.0;
  float norm = 16.0;
  float sum = w4 * centerSample;

  sum += w2 * textureGrad(tex, uv + vec2(0.0, -r.y), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(0.0, r.y), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(-r.x, 0.0), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(r.x, 0.0), dudx, dudy).r;

  sum += w1 * textureGrad(tex, uv + vec2(-r.x, -r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(r.x, -r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(-r.x, r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(r.x, r.y), dudx, dudy).r;

  return sum / norm;
}

float lst(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

void main() {

  const float firstFrameOffset = 2.8;
  float t = .3 * (u_time + firstFrameOffset);

  vec2 uv = v_imageUV;
  vec2 dudx = dFdx(v_imageUV);
  vec2 dudy = dFdy(v_imageUV);
  vec4 img = textureGrad(u_image, uv, dudx, dudy);

  if (u_isImage == false) {
    uv = v_objectUV + .5;
    uv.y = 1. - uv.y;
  }

  float cycleWidth = u_repetition;
  float edge = 0.;
  float contOffset = 1.;

  vec2 rotatedUV = uv - vec2(.5);
  float angle = (-u_angle + 70.) * PI / 180.;
  float cosA = cos(angle);
  float sinA = sin(angle);
  rotatedUV = vec2(
  rotatedUV.x * cosA - rotatedUV.y * sinA,
  rotatedUV.x * sinA + rotatedUV.y * cosA
  ) + vec2(.5);

  if (u_isImage == true) {
    float edgeRaw = img.r;
    edge = blurEdge3x3(u_image, uv, dudx, dudy, 6., edgeRaw);
    edge = pow(edge, 1.6);
    edge *= mix(0.0, 1.0, smoothstep(0.0, 0.4, u_contour));
  } else {
    if (u_shape < 1.) {
      // full-fill on canvas
      vec2 borderUV = v_responsiveUV + .5;
      float ratio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
      vec2 mask = min(borderUV, 1. - borderUV);
      vec2 pixel_thickness = min(250. / v_responsiveBoxGivenSize, vec2(.5));
      float maskX = smoothstep(0.0, pixel_thickness.x, mask.x);
      float maskY = smoothstep(0.0, pixel_thickness.y, mask.y);
      maskX = pow(maskX, .25);
      maskY = pow(maskY, .25);
      edge = clamp(1. - maskX * maskY, 0., 1.);

      uv = v_responsiveUV;
      if (ratio > 1.) {
        uv.y /= ratio;
      } else {
        uv.x *= ratio;
      }
      uv += .5;
      uv.y = 1. - uv.y;

      cycleWidth *= 2.;
      contOffset = 1.5;

    } else if (u_shape < 2.) {
      // circle
      vec2 shapeUV = uv - .5;
      shapeUV *= .67;
      edge = pow(clamp(3. * length(shapeUV), 0., 1.), 18.);
    } else if (u_shape < 3.) {
      // daisy
      vec2 shapeUV = uv - .5;
      shapeUV *= 1.68;

      float r = length(shapeUV) * 2.;
      float a = atan(shapeUV.y, shapeUV.x) + .2;
      r *= (1. + .05 * sin(3. * a + 2. * t));
      float f = abs(cos(a * 3.));
      edge = smoothstep(f, f + .7, r);
      edge *= edge;

      uv *= .8;
      cycleWidth *= 1.6;

    } else if (u_shape < 4.) {
      // diamond
      vec2 shapeUV = uv - .5;
      shapeUV = rotate(shapeUV, .25 * PI);
      shapeUV *= 1.42;
      shapeUV += .5;
      vec2 mask = min(shapeUV, 1. - shapeUV);
      vec2 pixel_thickness = vec2(.15);
      float maskX = smoothstep(0.0, pixel_thickness.x, mask.x);
      float maskY = smoothstep(0.0, pixel_thickness.y, mask.y);
      maskX = pow(maskX, .25);
      maskY = pow(maskY, .25);
      edge = clamp(1. - maskX * maskY, 0., 1.);
    } else if (u_shape < 5.) {
      // metaballs
      vec2 shapeUV = uv - .5;
      shapeUV *= 1.3;
      edge = 0.;
      for (int i = 0; i < 5; i++) {
        float fi = float(i);
        float speed = 1.5 + 2./3. * sin(fi * 12.345);
        float angle = -fi * 1.5;
        vec2 dir1 = vec2(cos(angle), sin(angle));
        vec2 dir2 = vec2(cos(angle + 1.57), sin(angle + 1.));
        vec2 traj = .4 * (dir1 * sin(t * speed + fi * 1.23) + dir2 * cos(t * (speed * 0.7) + fi * 2.17));
        float d = length(shapeUV + traj);
        edge += pow(1.0 - clamp(d, 0.0, 1.0), 4.0);
      }
      edge = 1. - smoothstep(.65, .9, edge);
      edge = pow(edge, 4.);
    }

    edge = mix(smoothstep(.9 - 2. * fwidth(edge), .9, edge), edge, smoothstep(0.0, 0.4, u_contour));

  }

  float opacity = 0.;
  if (u_isImage == true) {
    opacity = img.g;
    float frame = getImgFrame(v_imageUV, 0.);
    opacity *= frame;
  } else {
    opacity = 1. - smoothstep(.9 - 2. * fwidth(edge), .9, edge);
    if (u_shape < 2.) {
      edge = 1.2 * edge;
    } else if (u_shape < 5.) {
      edge = 1.8 * pow(edge, 1.5);
    }
  }

  float diagBLtoTR = rotatedUV.x - rotatedUV.y;
  float diagTLtoBR = rotatedUV.x + rotatedUV.y;

  vec3 color = vec3(0.);
  vec3 color1 = vec3(.98, 0.98, 1.);
  vec3 color2 = vec3(.1, .1, .1 + .1 * smoothstep(.7, 1.3, diagTLtoBR));

  vec2 grad_uv = uv - .5;

  float dist = length(grad_uv + vec2(0., .2 * diagBLtoTR));
  grad_uv = rotate(grad_uv, (.25 - .2 * diagBLtoTR) * PI);
  float direction = grad_uv.x;

  float bump = pow(1.8 * dist, 1.2);
  bump = 1. - bump;
  bump *= pow(uv.y, .3);


  float thin_strip_1_ratio = .12 / cycleWidth * (1. - .4 * bump);
  float thin_strip_2_ratio = .07 / cycleWidth * (1. + .4 * bump);
  float wide_strip_ratio = (1. - thin_strip_1_ratio - thin_strip_2_ratio);

  float thin_strip_1_width = cycleWidth * thin_strip_1_ratio;
  float thin_strip_2_width = cycleWidth * thin_strip_2_ratio;

  float noise = snoise(uv - t);

  edge += (1. - edge) * u_distortion * noise;

  direction += diagBLtoTR;
  float contour = 0.;
  direction -= 2. * noise * diagBLtoTR * (smoothstep(0., 1., edge) * (1.0 - smoothstep(0., 1., edge)));
  direction *= mix(1., 1. - edge, smoothstep(.5, 1., u_contour));
  direction -= 1.7 * edge * smoothstep(.5, 1., u_contour);
  direction += .2 * pow(u_contour, 4.) * (1.0 - smoothstep(0., 1., edge));

  bump *= clamp(pow(uv.y, .1), .3, 1.);
  direction *= (.1 + (1.1 - edge) * bump);

  direction *= (.4 + .6 * (1.0 - smoothstep(.5, 1., edge)));
  direction += .18 * (smoothstep(.1, .2, uv.y) * (1.0 - smoothstep(.2, .4, uv.y)));
  direction += .03 * (smoothstep(.1, .2, 1. - uv.y) * (1.0 - smoothstep(.2, .4, 1. - uv.y)));

  direction *= (.5 + .5 * pow(uv.y, 2.));
  direction *= cycleWidth;
  direction -= t;


  float colorDispersion = (1. - bump);
  colorDispersion = clamp(colorDispersion, 0., 1.);
  float dispersionRed = colorDispersion;
  dispersionRed += .03 * bump * noise;
  dispersionRed += 5. * (smoothstep(-.1, .2, uv.y) * (1.0 - smoothstep(.1, .5, uv.y))) * (smoothstep(.4, .6, bump) * (1.0 - smoothstep(.4, 1., bump)));
  dispersionRed -= diagBLtoTR;

  float dispersionBlue = colorDispersion;
  dispersionBlue *= 1.3;
  dispersionBlue += (smoothstep(0., .4, uv.y) * (1.0 - smoothstep(.1, .8, uv.y))) * (smoothstep(.4, .6, bump) * (1.0 - smoothstep(.4, .8, bump)));
  dispersionBlue -= .2 * edge;

  dispersionRed *= (u_shiftRed / 20.);
  dispersionBlue *= (u_shiftBlue / 20.);

  float blur = 0.;
  float rExtraBlur = 0.;
  float gExtraBlur = 0.;
  if (u_isImage == true) {
    float softness = 0.05 * u_softness;
    blur = softness + .5 * smoothstep(1., 10., u_repetition) * smoothstep(.0, 1., edge);
    float smallCanvasT = 1.0 - smoothstep(100., 500., min(u_resolution.x, u_resolution.y));
    blur += smallCanvasT * smoothstep(.0, 1., edge);
    rExtraBlur = softness * (0.05 + .1 * (u_shiftRed / 20.) * bump);
    gExtraBlur = softness * 0.05 / max(0.001, abs(1. - diagBLtoTR));
  } else {
    blur = u_softness / 15. + .3 * contour;
  }

  vec3 w = vec3(thin_strip_1_width, thin_strip_2_width, wide_strip_ratio);
  w[1] -= .02 * smoothstep(.0, 1., edge + bump);
  float stripe_r = fract(direction + dispersionRed);
  float r = getColorChanges(color1.r, color2.r, stripe_r, w, blur + fwidth(stripe_r) + rExtraBlur, bump, u_colorTint.r);
  float stripe_g = fract(direction);
  float g = getColorChanges(color1.g, color2.g, stripe_g, w, blur + fwidth(stripe_g) + gExtraBlur, bump, u_colorTint.g);
  float stripe_b = fract(direction - dispersionBlue);
  float b = getColorChanges(color1.b, color2.b, stripe_b, w, blur + fwidth(stripe_b), bump, u_colorTint.b);

  color = vec3(r, g, b);
  color *= opacity;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1. - opacity);
  opacity = opacity + u_colorBack.a * (1. - opacity);

  ${hn}

  fragColor = vec4(color, opacity);
}
`,fn=`#version 300 es
precision mediump float;

layout(location = 0) in vec4 a_position;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_imageAspectRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;
uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

out vec2 v_objectUV;
out vec2 v_objectBoxSize;
out vec2 v_responsiveUV;
out vec2 v_responsiveBoxGivenSize;
out vec2 v_patternUV;
out vec2 v_patternBoxSize;
out vec2 v_imageUV;

vec3 getBoxSize(float boxRatio, vec2 givenBoxSize) {
  vec2 box = vec2(0.);
  // fit = none
  box.x = boxRatio * min(givenBoxSize.x / boxRatio, givenBoxSize.y);
  float noFitBoxWidth = box.x;
  if (u_fit == 1.) { // fit = contain
    box.x = boxRatio * min(u_resolution.x / boxRatio, u_resolution.y);
  } else if (u_fit == 2.) { // fit = cover
    box.x = boxRatio * max(u_resolution.x / boxRatio, u_resolution.y);
  }
  box.y = box.x / boxRatio;
  return vec3(box, noFitBoxWidth);
}

void main() {
  gl_Position = a_position;

  vec2 uv = gl_Position.xy * .5;
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);


  // ===================================================

  float fixedRatio = 1.;
  vec2 fixedRatioBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );

  v_objectBoxSize = getBoxSize(fixedRatio, fixedRatioBoxGivenSize).xy;
  vec2 objectWorldScale = u_resolution.xy / v_objectBoxSize;

  v_objectUV = uv;
  v_objectUV *= objectWorldScale;
  v_objectUV += boxOrigin * (objectWorldScale - 1.);
  v_objectUV += graphicOffset;
  v_objectUV /= u_scale;
  v_objectUV = graphicRotation * v_objectUV;

  // ===================================================

  v_responsiveBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  float responsiveRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  vec2 responsiveBoxSize = getBoxSize(responsiveRatio, v_responsiveBoxGivenSize).xy;
  vec2 responsiveBoxScale = u_resolution.xy / responsiveBoxSize;

  v_responsiveUV = uv;
  v_responsiveUV *= responsiveBoxScale;
  v_responsiveUV += boxOrigin * (responsiveBoxScale - 1.);
  v_responsiveUV += graphicOffset;
  v_responsiveUV /= u_scale;
  v_responsiveUV.x *= responsiveRatio;
  v_responsiveUV = graphicRotation * v_responsiveUV;
  v_responsiveUV.x /= responsiveRatio;

  // ===================================================

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 patternBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;

  vec3 boxSizeData = getBoxSize(patternBoxRatio, patternBoxGivenSize);
  v_patternBoxSize = boxSizeData.xy;
  float patternBoxNoFitBoxWidth = boxSizeData.z;
  vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;

  v_patternUV = uv;
  v_patternUV += graphicOffset / patternBoxScale;
  v_patternUV += boxOrigin;
  v_patternUV -= boxOrigin / patternBoxScale;
  v_patternUV *= u_resolution.xy;
  v_patternUV /= u_pixelRatio;
  if (u_fit > 0.) {
    v_patternUV *= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
  }
  v_patternUV /= u_scale;
  v_patternUV = graphicRotation * v_patternUV;
  v_patternUV += boxOrigin / patternBoxScale;
  v_patternUV -= boxOrigin;
  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  v_patternUV *= .01;

  // ===================================================

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  v_imageUV = uv;
  v_imageUV *= imageBoxScale;
  v_imageUV += boxOrigin * (imageBoxScale - 1.);
  v_imageUV += graphicOffset;
  v_imageUV /= u_scale;
  v_imageUV.x *= u_imageAspectRatio;
  v_imageUV = graphicRotation * v_imageUV;
  v_imageUV.x /= u_imageAspectRatio;

  v_imageUV += .5;
  v_imageUV.y = 1. - v_imageUV.y;
}`,gn=pn;function Ma(e,t,a){const n=e.createShader(t);if(!n)throw new Error("metal-fx: gl.createShader returned null");if(e.shaderSource(n,a),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS)){const i=e.getShaderInfoLog(n);throw e.deleteShader(n),new Error(`metal-fx: shader compile failed: ${i??"(no info log)"}`)}return n}function xn(e,t,a){const n=e.createProgram();if(!n)throw new Error("metal-fx: gl.createProgram returned null");if(e.attachShader(n,t),e.attachShader(n,a),e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS)){const i=e.getProgramInfoLog(n);throw e.deleteProgram(n),new Error(`metal-fx: program link failed: ${i??"(no info log)"}`)}return n}const mi=140,pi=40,fi=1.6,gi=1.3;let b=null,Fe=null;function vn(){var e;if(Fe!==null)return Fe;if(typeof document>"u")return Fe=!1;try{const t=document.createElement("canvas").getContext("webgl2");Fe=!!t,(e=t==null?void 0:t.getExtension("WEBGL_lose_context"))==null||e.loseContext()}catch{Fe=!1}return Fe}let Qt=null;function bn(e){Qt=e}const yn=["u_resolution","u_time","u_pixelRatio","u_colorBack","u_colorTint","u_repetition","u_softness","u_shiftRed","u_shiftBlue","u_distortion","u_contour","u_angle","u_shape","u_isImage","u_image","u_originX","u_originY","u_worldWidth","u_worldHeight","u_fit","u_scale","u_rotation","u_offsetX","u_offsetY","u_imageAspectRatio"];function ka(e){e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA);const t=Ma(e,e.VERTEX_SHADER,fn),a=Ma(e,e.FRAGMENT_SHADER,gn),n=xn(e,t,a);e.useProgram(n);const i=e.createBuffer();if(!i)throw new Error("metal-fx: gl.createBuffer returned null");e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);const s=e.getAttribLocation(n,"a_position");e.enableVertexAttribArray(s),e.vertexAttribPointer(s,2,e.FLOAT,!1,0,0);const r={};for(const l of yn)r[l]=e.getUniformLocation(n,l);const c=e.createTexture();return c&&(e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,c),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),r.u_image&&e.uniform1i(r.u_image,0)),{program:n,buffer:i,uniforms:r,dummyTexture:c}}function xi(){if(b)return b;const e=Math.min(nn,typeof window<"u"&&window.devicePixelRatio||1),t=Math.round(an*e),a=typeof OffscreenCanvas<"u";let n,i;if(a)n=new OffscreenCanvas(t,t),i=n.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1});else{const h=document.createElement("canvas");h.width=t,h.height=t,i=h.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,preserveDrawingBuffer:!0}),n=h}if(!i)throw new Error("metal-fx: WebGL2 not supported");const{program:s,buffer:r,uniforms:c,dummyTexture:l}=ka(i),d=h=>{h.preventDefault(),b&&(b.contextLost=!0)},u=()=>{if(!b)return;const h=ka(b.gl);b.program=h.program,b.buffer=h.buffer,b.uniforms=h.uniforms,b.dummyTexture=h.dummyTexture,b.presetDirty=!0,b.contextLost=!1,Qt==null||Qt()};return n.addEventListener("webglcontextlost",d,!1),n.addEventListener("webglcontextrestored",u,!1),b={glCanvas:n,gl:i,program:s,buffer:r,uniforms:c,dummyTexture:l,preset:hi.chromatic.modes.dark,presetDirty:!0,contextLost:!1,useOffscreen:a,frameBitmap:null,startMs:performance.now(),pausedMs:0,pausedAtMs:null,rafId:0,dpr:e,instances:new Set,frameCount:0,glowQueue:[],glowIdx:0,glowSkip:0,glowPixels:new Uint8Array(t*t*4),glowPixelsW:t,glowPixelsH:t},b}function wn(){var e;if(!b)return;const{gl:t,program:a,buffer:n,frameBitmap:i,dummyTexture:s}=b;try{i==null||i.close(),t.deleteBuffer(n),t.deleteProgram(a),s&&t.deleteTexture(s),(e=t.getExtension("WEBGL_lose_context"))==null||e.loseContext()}catch{}b=null}let _a=0;function Mn(){if(!b)return;const e=performance.now();if(e-_a<en)return;_a=e;const{gl:t,glCanvas:a}=b,n=a.width,i=a.height;(b.glowPixelsW!==n||b.glowPixelsH!==i)&&(b.glowPixelsW=n,b.glowPixelsH=i,b.glowPixels=new Uint8Array(n*i*4)),t.readPixels(0,0,n,i,t.RGBA,t.UNSIGNED_BYTE,b.glowPixels)}const De={bx:0,by:0};function Nt(e,t,a){if(!b)return De.bx=0,De.by=0,De;const{glCanvas:n}=b,i=n.width,s=n.height,r=e.dpr,c=e.cssWidth*r,l=e.cssHeight*r,d=mi*r,u=pi*r;let h=c*(i/d)/e.shaderScale,g=l*(s/u)/e.shaderScale;h>i&&(h=i),g>s&&(g=s);const x=(i-h)/2,v=(s-g)/2,p=x+t/e.cssWidth*h,M=v+a/e.cssHeight*g;return De.bx=Math.round(p),De.by=Math.round(s-1-M),De}const fe={r:0,g:0,b:0,lum:0,count:0};function vi(e,t,a,n,i,s){const r=Math.max(1,s|0),c=Math.max(0,n-r),l=Math.min(t,n+r+1),d=Math.max(0,i-r),u=Math.min(a,i+r+1);fe.r=0,fe.g=0,fe.b=0,fe.lum=0,fe.count=0;for(let h=d;h<u;h++){const g=h*t;for(let x=c;x<l;x++){const v=(g+x)*4;fe.r+=e[v],fe.g+=e[v+1],fe.b+=e[v+2],fe.lum+=(.2126*e[v]+.7152*e[v+1]+.0722*e[v+2])/255,fe.count++}}return fe}const ie={r:255,g:255,b:255};function Jt(e,t,a,n){if(!b)return 0;const i=Nt(e,t,a),s=vi(b.glowPixels,b.glowPixelsW,b.glowPixelsH,i.bx,i.by,n);return s.count>0?s.lum/s.count:0}function bi(e,t,a,n){if(!b)return ie.r=255,ie.g=255,ie.b=255,ie;const i=Nt(e,t,a),s=vi(b.glowPixels,b.glowPixelsW,b.glowPixelsH,i.bx,i.by,n);return s.count===0?(ie.r=255,ie.g=255,ie.b=255,ie):(ie.r=s.r/s.count,ie.g=s.g/s.count,ie.b=s.b/s.count,ie)}function kn(e,t,a,n){if(!b)return ie.r=255,ie.g=255,ie.b=255,ie;const i=Nt(e,t,a),{glowPixels:s,glowPixelsW:r,glowPixelsH:c}=b,l=Math.max(1,n|0),d=Math.max(0,i.bx-l),u=Math.min(r,i.bx+l+1),h=Math.max(0,i.by-l),g=Math.min(c,i.by+l+1);let x=-1;ie.r=255,ie.g=255,ie.b=255;for(let v=h;v<g;v++){const p=v*r;for(let M=d;M<u;M++){const k=(p+M)*4,m=s[k],f=s[k+1],S=s[k+2],w=Math.max(m,f,S),I=Math.min(m,f,S),U=(w>0?(w-I)/w:0)*(.35+.65*(w/255));U>x&&(x=U,ie.r=m,ie.g=f,ie.b=S)}}return ie}const ge={r:255,g:255,b:255,lum:0};function _n(e,t,a,n){if(ge.r=255,ge.g=255,ge.b=255,ge.lum=0,!b)return ge;const i=Nt(e,t,a),{glowPixels:s,glowPixelsW:r,glowPixelsH:c}=b,l=Math.max(1,n|0),d=Math.max(0,i.bx-l),u=Math.min(r,i.bx+l+1),h=Math.max(0,i.by-l),g=Math.min(c,i.by+l+1);for(let x=h;x<g;x++){const v=x*r;for(let p=d;p<u;p++){const M=(v+p)*4,k=(.2126*s[M]+.7152*s[M+1]+.0722*s[M+2])/255;k>ge.lum&&(ge.lum=k,ge.r=s[M],ge.g=s[M+1],ge.b=s[M+2])}}return ge}const Et=14,Sa=1.5,Bt={x:0,y:0};function Xe(e=512){return{xy:new Float32Array(e*2),n:0}}function Ye(e,t,a,n,i,s,r=Xe()){i=Math.max(0,Math.min(i,Math.min(a,n)/2));const c=4*(Et+1)+Math.ceil(2*(a+n)/Sa)+8;r.xy.length<c*2&&(r.xy=new Float32Array(c*2));const l=r.xy;let d=0;const u=(x,v)=>{s?(s(x,v,Bt),l[d*2]=Bt.x,l[d*2+1]=Bt.y):(l[d*2]=x,l[d*2+1]=v),d++},h=(x,v,p,M)=>{const k=Math.hypot(p-x,M-v),m=Math.max(1,Math.ceil(k/Sa));for(let f=0;f<m;f++){const S=f/m;u(x+(p-x)*S,v+(M-v)*S)}},g=(x,v,p,M)=>{for(let k=0;k<=Et;k++){const m=p+(M-p)*(k/Et);u(x+i*Math.cos(m),v+i*Math.sin(m))}};return h(e+i,t,e+a-i,t),g(e+a-i,t+i,-Math.PI/2,0),h(e+a,t+i,e+a,t+n-i),g(e+a-i,t+n-i,0,Math.PI/2),h(e+a-i,t+n,e+i,t+n),g(e+i,t+n-i,Math.PI/2,Math.PI),h(e,t+n-i,e,t+i),g(e+i,t+i,Math.PI,1.5*Math.PI),r.n=d,r}bn(()=>{b&&b.instances.size>0&&b.pausedAtMs===null&&mt()});typeof document<"u"&&document.addEventListener("visibilitychange",()=>{!b||b.pausedAtMs!==null||b.contextLost||(document.hidden?ki():b.instances.size>0&&mt())});function Sn(e){const t=xi(),a=e.hostCanvas.getContext("2d",{alpha:!0});if(!a)throw new Error("metal-fx: canvas 2D context unavailable");const n=e.scale??1,i={canvas:e.hostCanvas,ctx:a,cssWidth:e.cssWidth,cssHeight:e.cssHeight,cornerRadius:e.cornerRadius,kind:e.kind,ringCssPx:e.ringCssPx??(e.kind==="circle"?2:1)*n,shaderScale:e.shaderScale??(e.kind==="circle"?gi:fi)*n,opacityMul:e.opacityMul??1,glowGain:e.glowGain??1,visible:!0,paused:e.paused??!1,everCopied:!1,frozen:null,dpr:typeof window<"u"&&window.devicePixelRatio||1,scale:n,onAfterFrame:e.onAfterFrame,onComposite:e.onComposite,onFirstCopy:e.onFirstCopy,mask:e.mask??null,deform:null,deformLayers:null,overscan:0,cursorLight:null,glowFast:!1,rawCanvas:null,wantRaw:!1,ringCanvas:null,wantRing:!1};return ua(i),t.instances.add(i),t.rafId===0&&t.pausedAtMs===null&&mt(),i}function jn(e){if(!b)return;b.instances.delete(e);const t=b.glowQueue.indexOf(e);t!==-1&&b.glowQueue.splice(t,1),b.instances.size===0&&(ki(),wn())}function Cn(e){b&&(b.glowQueue.includes(e)||b.glowQueue.push(e))}function An(e){if(!b)return;const t=b.glowQueue.indexOf(e);t!==-1&&b.glowQueue.splice(t,1)}function Ve(e,t){let a=!1;t.mask!==void 0&&(e.mask=t.mask),t.cssWidth!==void 0&&t.cssWidth!==e.cssWidth&&(e.cssWidth=t.cssWidth,a=!0),t.cssHeight!==void 0&&t.cssHeight!==e.cssHeight&&(e.cssHeight=t.cssHeight,a=!0),t.cornerRadius!==void 0&&(e.cornerRadius=t.cornerRadius),t.scale!==void 0&&(e.scale=t.scale),t.kind!==void 0&&t.kind!==e.kind&&(e.kind=t.kind,t.shaderScale===void 0&&(e.shaderScale=(t.kind==="circle"?gi:fi)*e.scale),t.ringCssPx===void 0&&(e.ringCssPx=(t.kind==="circle"?2:1)*e.scale)),t.shaderScale!==void 0&&(e.shaderScale=t.shaderScale),t.ringCssPx!==void 0&&(e.ringCssPx=t.ringCssPx),t.opacityMul!==void 0&&(e.opacityMul=t.opacityMul),t.glowGain!==void 0&&(e.glowGain=t.glowGain),t.paused!==void 0&&t.paused!==e.paused&&(e.paused=t.paused,t.paused?yi(e):e.frozen=null,!t.paused&&b&&b.rafId===0&&b.pausedAtMs===null&&!b.contextLost&&mt()),a&&ua(e)}function Tn(e,t){e.visible=t,t&&b&&b.rafId===0&&b.pausedAtMs===null&&!b.contextLost&&mt()}function Rn(e){return(typeof window<"u"&&window.devicePixelRatio||1)===e.dpr?!1:(ua(e),wi(e),!0)}function In(e,t){const a=xi();a.preset=hi[e].modes[t],a.presetDirty=!0}let Ee=null;function Nn(e){Ee=e}function Ot(e,t){!Ee||!b||!e.visible||e.paused||b.glowQueue.includes(e)&&(e.glowFast=!!Ee(e,t))}function ua(e){e.dpr=typeof window<"u"&&window.devicePixelRatio||1;const t=e.overscan,a=Math.max(1,Math.round((e.cssWidth+2*t)*e.dpr)),n=Math.max(1,Math.round((e.cssHeight+2*t)*e.dpr));e.canvas.width!==a&&(e.canvas.width=a),e.canvas.height!==n&&(e.canvas.height=n);const i=e.canvas.style;t>0?(i.left=`${-t}px`,i.top=`${-t}px`,i.width=`calc(100% + ${2*t}px)`,i.height=`calc(100% + ${2*t}px)`,i.borderRadius="0"):i.left!==""&&(i.left="",i.top="",i.width="100%",i.height="100%",i.borderRadius="")}function Pn(e){const{ctx:t,dpr:a,canvas:n}=e,i=e.ringCssPx*a,s=n.width,r=n.height,c=Math.max(0,(e.cornerRadius-e.ringCssPx)*a);t.save(),t.globalCompositeOperation="destination-out",t.fillStyle="#000",t.beginPath(),t.roundRect(i,i,s-2*i,r-2*i,c),t.fill(),t.restore()}const En=Xe();function Re(e,t,a,n,i,s,r,c){const{xy:l,n:d}=Ye(t,a,n,i,s,r,En);e.beginPath();for(let u=0;u<d;u++)u===0?e.moveTo(l[0]*c,l[1]*c):e.lineTo(l[u*2]*c,l[u*2+1]*c);e.closePath()}function yi(e){if(!b)return null;const t=b.frameBitmap??b.glCanvas,a=b.glCanvas.width,n=b.glCanvas.height;if(a<1||n<1)return null;let i=e.frozen;i||(i=document.createElement("canvas"),e.frozen=i),(i.width!==a||i.height!==n)&&(i.width=a,i.height=n);const s=i.getContext("2d");return s?(s.clearRect(0,0,a,n),s.drawImage(t,0,0),i):(e.frozen=null,null)}function wi(e){var t,a;if(!b)return;const n=(e.paused?e.frozen??yi(e):null)??b.frameBitmap??b.glCanvas,i=e.dpr,s=e.canvas.width,r=e.canvas.height;if(s<1||r<1)return;const c=Math.max(1,Math.round(e.cssWidth*i)),l=Math.max(1,Math.round(e.cssHeight*i)),d=e.overscan*i,u=n.width,h=n.height,g=mi*i,x=pi*i;let v=c*(u/g)/e.shaderScale,p=l*(h/x)/e.shaderScale;v>u&&(v=u),p>h&&(p=h);const M=Math.max(0,(u-v)/2),k=Math.max(0,(h-p)/2),m=e.opacityMul*b.preset.shaderOpacity,f=e.ctx;f.clearRect(0,0,s,r);const S=e.deform;if(e.mask){if(m<1&&(f.globalAlpha=m),f.drawImage(n,M,k,v,p,0,0,s,r),m<1&&(f.globalAlpha=1),e.wantRaw){let w=e.rawCanvas;w||(w=document.createElement("canvas"),e.rawCanvas=w),(w.width!==s||w.height!==r)&&(w.width=s,w.height=r);const I=w.getContext("2d");I&&(I.clearRect(0,0,s,r),I.drawImage(e.canvas,0,0))}f.save(),f.globalCompositeOperation="destination-in",f.fillStyle="#000",e.mask(f,s,r,i),f.restore(),f.globalCompositeOperation="source-over"}else if(!S)m<1&&(f.globalAlpha=m),f.drawImage(n,M,k,v,p,0,0,s,r),m<1&&(f.globalAlpha=1),Pn(e);else{const w=e.cssWidth,I=e.cssHeight,U=e.cornerRadius,P=e.ringCssPx,B=e.deformLayers;f.save(),f.translate(d,d);const q=c/v,D=l/p,V=Math.min(u,v*(c+2*d)/c),C=Math.min(h,p*(l+2*d)/l),G=Math.max(0,(u-V)/2),z=Math.max(0,(h-C)/2),y=V*q,_=C*D;if(m<1&&(f.globalAlpha=m),f.drawImage(n,G,z,V,C,c/2-y/2,l/2-_/2,y,_),m<1&&(f.globalAlpha=1),f.globalCompositeOperation="destination-in",Re(f,0,0,w,I,U,S,i),f.fillStyle="#000",f.fill(),f.globalCompositeOperation="destination-out",Re(f,P,P,w-2*P,I-2*P,Math.max(0,U-P),S,i),f.fill(),e.wantRing){let j=e.ringCanvas;j||(j=document.createElement("canvas"),e.ringCanvas=j),(j.width!==s||j.height!==r)&&(j.width=s,j.height=r);const T=j.getContext("2d");T&&(T.setTransform(1,0,0,1,0,0),T.globalCompositeOperation="source-over",T.clearRect(0,0,s,r),T.translate(d,d),m<1&&(T.globalAlpha=m),T.drawImage(n,G,z,V,C,c/2-y/2,l/2-_/2,y,_),T.globalAlpha=1,T.globalCompositeOperation="destination-out",Re(T,P,P,w-2*P,I-2*P,Math.max(0,U-P),S,i),T.fillStyle="#000",T.fill(),T.globalCompositeOperation="source-over",T.setTransform(1,0,0,1,0,0))}if(B!=null&&B.hairline){const j=B.hairline;f.globalCompositeOperation="destination-over",Re(f,j.inset,j.inset,w-2*j.inset,I-2*j.inset,Math.max(0,U-j.inset),S,i),f.lineWidth=j.width*i,f.strokeStyle=j.color,f.stroke()}if(B!=null&&B.fill&&(f.globalCompositeOperation="destination-over",Re(f,0,0,w,I,U,S,i),f.fillStyle=B.fill,f.fill()),B!=null&&B.rim){const j=B.rim;f.globalCompositeOperation="source-over",f.save(),Re(f,0,0,w,I,U,S,i),f.clip();const T=j.inset+j.width/2;Re(f,T,T,w-2*T,I-2*T,Math.max(0,U-T),S,i),f.lineWidth=j.width*i,f.strokeStyle=j.color,f.stroke(),f.restore()}f.restore(),f.globalCompositeOperation="source-over"}if((t=e.onComposite)==null||t.call(e),e.onFirstCopy){const w=e.onFirstCopy;e.onFirstCopy=void 0,w()}(a=e.onAfterFrame)==null||a.call(e)}function Bn(){if(!b)return;const{gl:e,uniforms:t,preset:a,glCanvas:n,dpr:i}=b;t.u_resolution&&e.uniform2f(t.u_resolution,n.width,n.height),t.u_pixelRatio&&e.uniform1f(t.u_pixelRatio,i),t.u_colorBack&&e.uniform4fv(t.u_colorBack,ya(a.colorBack)),t.u_colorTint&&e.uniform4fv(t.u_colorTint,ya(a.colorTint)),t.u_repetition&&e.uniform1f(t.u_repetition,a.repetition),t.u_softness&&e.uniform1f(t.u_softness,a.softness),t.u_shiftRed&&e.uniform1f(t.u_shiftRed,a.shiftRed),t.u_shiftBlue&&e.uniform1f(t.u_shiftBlue,a.shiftBlue),t.u_distortion&&e.uniform1f(t.u_distortion,a.distortion),t.u_contour&&e.uniform1f(t.u_contour,a.contour),t.u_angle&&e.uniform1f(t.u_angle,a.angle),t.u_shape&&e.uniform1f(t.u_shape,a.shape),t.u_isImage&&e.uniform1i(t.u_isImage,0),t.u_imageAspectRatio&&e.uniform1f(t.u_imageAspectRatio,1),t.u_originX&&e.uniform1f(t.u_originX,a.originX),t.u_originY&&e.uniform1f(t.u_originY,a.originY),t.u_worldWidth&&e.uniform1f(t.u_worldWidth,a.worldWidth),t.u_worldHeight&&e.uniform1f(t.u_worldHeight,a.worldHeight),t.u_fit&&e.uniform1f(t.u_fit,a.fit),t.u_scale&&e.uniform1f(t.u_scale,a.scale),t.u_rotation&&e.uniform1f(t.u_rotation,a.rotation),t.u_offsetX&&e.uniform1f(t.u_offsetX,a.offsetX),t.u_offsetY&&e.uniform1f(t.u_offsetY,a.offsetY),b.presetDirty=!1}function On(e){if(!b)return;const{gl:t,uniforms:a,preset:n,glCanvas:i}=b,s=(e-b.startMs-b.pausedMs)/1e3*n.speed;t.viewport(0,0,i.width,i.height),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),b.presetDirty&&Bn(),a.u_time&&t.uniform1f(a.u_time,s),t.drawArrays(t.TRIANGLES,0,6),b.frameCount++}let ja=0;function Mi(e){var t;if(!b)return;if(b.contextLost){b.rafId=0;return}let a=!1;for(const n of b.instances)if(n.visible&&(!n.paused||!n.everCopied)){a=!0;break}if(!a){b.rafId=0;return}if(b.rafId=requestAnimationFrame(Mi),e-ja<Ki){if(Ee)for(const n of b.glowQueue)n.glowFast&&n.visible&&!n.paused&&(n.glowFast=!!Ee(n,e));return}ja=e,On(e),Mn(),b.useOffscreen&&((t=b.frameBitmap)==null||t.close(),b.frameBitmap=b.glCanvas.transferToImageBitmap());for(const n of b.instances)n.visible&&(n.paused&&n.everCopied||(wi(n),n.everCopied=!0));if(Ee&&b.glowQueue.length>0&&++b.glowSkip%tn===0)for(const n of b.glowQueue)n.visible&&!n.paused&&(n.glowFast=!!Ee(n,e))}function mt(){!b||b.rafId!==0||(b.rafId=requestAnimationFrame(Mi))}function ki(){b&&(b.rafId!==0&&cancelAnimationFrame(b.rafId),b.rafId=0)}const Kt={linear:e=>e,smoothstep:e=>e*e*(3-2*e)};function Ke(e,t,a,n=Kt.linear){return{from:e,to:t,dur:a,ease:n,startMs:-1,val:e,done:!1}}function Ze(e,t){e.startMs=t,e.val=e.from,e.done=!1}function Ca(e,t){if(e.done||e.startMs<0)return e.val;const a=Math.min(1,(t-e.startMs)/e.dur);return e.val=e.from+(e.to-e.from)*e.ease(a),a>=1&&(e.done=!0),e.val}const Ln=Object.freeze({haloOpMul:2,extraIntensity:3.51,peakOp:.85,baseOp:.34,inset:1.5,extraOutward:1,wanderRange:15,wanderLerp:.0075,fadeRate:.00875,lumLo:.08,lumHi:.32,minDwellMs:1500,relocFadeMs:300,relocFadeOutMs:450,pointGain:2.5,haloHalfLen:7.8,extraHalfLen:9.13952/3,haloStrokeXl:26.4,haloStrokeLg:15.6,haloStrokeMd:7.2,haloStrokeSm:3,haloBlurXl:8.4,haloBlurLg:4.8,haloBlurMd:2.1,haloBlurSm:.9,haloOpXl:.385,haloOpLg:.595,haloOpMd:.7,haloOpSm:.7,extraStrokeOuter:4/3,extraStrokeCore:2/3,extraBlurOuter:2/3,extraBlurCore:1.35/3,extraFadeR:13/3,extraOpOuter:.85}),A={...Ln},Aa=new Set;function Fn(e){return Aa.add(e),()=>{Aa.delete(e)}}const Dn=Object.freeze({enabled:!0,reach:56,fadeMs:200,cursor:!0,cursorDistance:186,cursorStrength:3.35,cursorDiffuse:1.4,cursorFalloff:37,cursorDepth:.4,cursorEdge:0,cursorReach:11.5,cursorBlur:.5,cursorZoom:3,spill:!1,spillRadius:48,spillStrength:.55,spillOffset:.35,spillLumGain:.7,spillSaturation:1.3,spillInside:.5,spillBlur:0,catchLight:!1,catchFollow:.25,catchGain:1}),at={...Dn};let $e=null,St=null;function Vn(){return 1}function _i(e,t){if(!pe||!$e)return;const a=Vn(),n=(e-$e.hotX*a).toFixed(2),i=(t-$e.hotY*a).toFixed(2);pe.style.transform=`translate3d(${n}px,${i}px,0)`}let Si=!1,ji=0,bt=0;const yt={x:0,y:0};let wt=null,Ta=0;function Un(e,t,a,n,i){if(wt&&Ta===a&&wt.length===n*i)return wt;const s=document.createElement("canvas");s.width=n,s.height=i;const r=s.getContext("2d",{willReadFrequently:!0});if(!r)return null;r.scale(a,a),r.drawImage(e,0,0,t.width,t.height);const c=r.getImageData(0,0,n,i).data,l=new Uint8ClampedArray(n*i);for(let d=0,u=3;d<l.length;d++,u+=4)l[d]=c[u]>=128?255:0;return wt=l,Ta=a,l}function Ra(e,t,a,n){const i=e.getImageData(0,0,t,a),s=i.data;for(let r=0,c=0,l=3;r<a;r++)for(let d=0;d<t;d++,c++,l+=4){const u=s[l];if(u===0)continue;const h=n(d,r,c);s[l]=h>=1?u:h<=0?0:u*h}e.putImageData(i,0,0)}function zn(e,t){return 0}let ot=0,Qe=!1,Be=0,Zt=0,xe=Number.NaN,je=Number.NaN,lt=0,ct=0,Ie=0,Ne=0,te=null;const $={d:0,nx:0,ny:0,k:1,left:0,top:0},Lt={x:0,y:0},be={r:255,g:255,b:255};let Me=null,ea="",ta=-1,aa=-1,dt=!1;function Wn(){ot++,Hn()}function Gn(){ot=Math.max(0,ot-1),ot===0&&$n()}const it=e=>typeof window.matchMedia=="function"&&window.matchMedia(e).matches;function Ia(){if(Si||performance.now()<ji||!$e||!St||it("(prefers-reduced-motion: reduce)")||it("(forced-colors: active)")||!it("(pointer: fine)")||!it("(hover: hover)"))return!1;const e=window.visualViewport;return!(e&&Math.abs(e.scale-1)>.001)}function Hn(){Qe||ot===0||typeof document>"u"||it("(pointer: fine)")&&(Qe=!0,document.addEventListener("pointermove",Ci,{passive:!0}),document.addEventListener("pointerleave",Ce),document.addEventListener("pointercancel",Ce),document.addEventListener("keydown",Ai,{passive:!0}),document.addEventListener("visibilitychange",Ce),window.addEventListener("blur",Ce))}function $n(){Qe&&(Qe=!1,document.removeEventListener("pointermove",Ci),document.removeEventListener("pointerleave",Ce),document.removeEventListener("pointercancel",Ce),document.removeEventListener("keydown",Ai),document.removeEventListener("visibilitychange",Ce),window.removeEventListener("blur",Ce),Be!==0&&(cancelAnimationFrame(Be),Be=0),te&&(te.cursorLight=null,te=null),Ie=0,Ne=0,Me&&(Me.remove(),Me=null,ea="",ta=-1,aa=-1,dt=!1),Le(),pe&&(pe.remove(),pe=null))}let ia=!0,ha=!1;function Ci(e){ia=e.pointerType==="mouse"||e.pointerType==="",ha=!1,xe=lt=e.clientX,je=ct=e.clientY,ut&&pe&&(ia&&Ri(xe,je)?_i(xe,je):Le()),Ti()}function Ai(){ha=!0,Le()}function Ce(){xe=je=Number.NaN,Ti()}function Ti(){!Qe||Be!==0||(Zt=performance.now(),Be=requestAnimationFrame(Ii))}function qn(e,t,a,n,i,s,r){const c=s==="circle"?Math.min(a,n)/2:Math.max(0,Math.min(i,Math.min(a,n)/2)),l=a/2,d=n/2,u=Math.max(0,a/2-c),h=Math.max(0,n/2-c),g=Math.max(-u,Math.min(u,e-l)),x=Math.max(-h,Math.min(h,t-d)),v=e-l-g,p=t-d-x,M=Math.hypot(v,p);if(M>1e-6)return r.x=l+g+v/M*c,r.y=d+x+p/M*c,M-c;const k=e,m=a-e,f=t,S=n-t,w=Math.min(k,m,f,S);return w===k?(r.x=0,r.y=t):w===m?(r.x=a,r.y=t):w===f?(r.x=e,r.y=0):(r.x=e,r.y=n),-w}let pe=null,_e=null,na=null,de=null,nt=null,Na=!1,Pa=0,Ea=0,Ba=0,ut=!1,He=!1,oa="",we=null,rt="";const Xn=/^(INPUT|TEXTAREA|SELECT)$/;let ra=new WeakMap,Oa=0,sa=null;function Yn(e){let t=e;for(;t&&t!==document.body;){if(Xn.test(t.tagName)||t.isContentEditable)return!0;t=t.parentElement}return!1}function Qn(){if(pe)return!0;const e=document.createElement("div");e.className="metal-fx-cursor",e.setAttribute("aria-hidden","true"),e.style.cssText="position:fixed;left:0;top:0;pointer-events:none;z-index:2147483001;will-change:transform;transform-origin:0 0;display:none";const t=document.createElement("canvas");t.style.display="block",e.appendChild(t),document.body.appendChild(e);const a=t.getContext("2d"),n=document.createElement("canvas"),i=n.getContext("2d");return!a||!i?(e.remove(),!1):(pe=e,_e=t,na=a,de=n,nt=i,!0)}function Ri(e,t,a=!1){const n=performance.now();if(!a&&He&&n-Oa<12)return!0;Oa=n;const i=document.elementFromPoint(e,t);if(!i)return la(),!1;if(i===sa&&He)return!0;sa=i;let s=ra.get(i);if(s===void 0){if(s=!Yn(i),s){const r=getComputedStyle(i).cursor;s=r==="auto"||r==="default"||r==="none"}ra.set(i,s)}if(!s)return la(),!1;if(!He){const r=document.documentElement;oa=r.style.cursor,r.style.cursor="none",He=!0}return i!==we&&(we&&(we.style.cursor=rt,we=null,rt=""),getComputedStyle(i).cursor!=="none"&&(we=i,rt=i.style.cursor,i.style.cursor="none")),!0}function la(){we&&(we.isConnected&&(we.style.cursor=rt),we=null,rt=""),He&&(document.documentElement.style.cursor=oa,He=!1,oa=""),sa=null,ra=new WeakMap}function Le(){la(),pe&&ut&&(pe.style.display="none",ut=!1)}function Jn(e,t,a){if(!na||!nt||!_e||!de||!pe||!$e||!St)return;const n=$e,i=Math.min(3,window.devicePixelRatio||1);if((i!==Pa||n.width!==Ea||n.height!==Ba)&&(Pa=i,Ea=n.width,Ba=n.height,_e.width=de.width=Math.ceil(n.width*i),_e.height=de.height=Math.ceil(n.height*i),_e.style.width=`${n.width}px`,_e.style.height=`${n.height}px`),!Na&&(nt=de.getContext("2d",{willReadFrequently:!0}),Na=!0,!nt))return;const s=na,r=nt,c=n.width,l=n.height;s.setTransform(1,0,0,1,0,0),s.clearRect(0,0,_e.width,_e.height),s.scale(i,i),s.drawImage(St,0,0,c,l);const d=$.left+$.nx*$.k,u=$.top+$.ny*$.k,h=lt-n.hotX+yt.x,g=ct-n.hotY+yt.y,x=d-h,v=u-g,p=Math.hypot(x,v),M=zn()+t.cursorEdge,k=Math.max(0,p-M),m=Math.max(1,t.cursorFalloff),f=1/(1+k/m*(k/m)),S=e.cssWidth/2,w=e.cssHeight/2,I=S-$.nx,U=w-$.ny,P=Math.hypot(I,U)||1,B=e.mask?0:e.ringCssPx*.5+1,q=$.nx+I/P*B,D=$.ny+U/P*B,V=_n(e,q,D,4),C=V.lum,G=V.r,z=V.g,y=V.b,_=t.cursorStrength*f*a,j=t.cursorDiffuse*f*(.5+.5*Math.min(1,C/.5))*a;if(p>.01&&_+j>.005){const T=x/p,Q=v/p,Z=Math.atan2(Q,T),ne=Math.max(.1,Math.min(1,t.cursorDepth)),O=yt.x+M*T,E=yt.y+M*Q,H=Math.max(1,t.cursorReach);if(r.setTransform(1,0,0,1,0,0),r.clearRect(0,0,de.width,de.height),r.scale(i,i),_>.005){r.save(),r.filter=t.cursorBlur>0?`blur(${t.cursorBlur}px)`:"none";const L=Math.max(1,t.cursorZoom);r.translate(O,E),r.rotate(Z),r.scale(-1,1),r.translate((p-M)*ne,0),r.rotate(-Z),r.scale(L,L);const J=e.overscan,ae=$.k,oe=Math.max(1,Math.ceil(_));r.globalAlpha=Math.min(1,_/oe),r.globalCompositeOperation="lighter";const se=e.mask&&e.rawCanvas?e.rawCanvas:e.canvas;for(let ue=0;ue<oe;ue++)r.drawImage(se,-($.nx+J)*ae,-($.ny+J)*ae,(e.cssWidth+2*J)*ae,(e.cssHeight+2*J)*ae);r.restore();const re=1/i,le=1/H;Ra(r,de.width,de.height,(ue,F)=>{const K=-(((ue+.5)*re-O)*T+((F+.5)*re-E)*Q);return K<=0?1:1-K*le})}if(j>.005){const L=Math.max(G,z,y)||1,J=Math.round(G*255/L),ae=Math.round(z*255/L),oe=Math.round(y*255/L),se=H*1.2,re=r.createLinearGradient(O+.5*T,E+.5*Q,O-se*T,E-se*Q),le=Math.min(1,j);re.addColorStop(0,`rgba(${J},${ae},${oe},${le.toFixed(3)})`),re.addColorStop(.45,`rgba(${J},${ae},${oe},${(le*.4).toFixed(3)})`),re.addColorStop(1,`rgba(${J},${ae},${oe},0)`),r.globalCompositeOperation="lighter",r.fillStyle=re,r.fillRect(0,0,c,l),r.globalCompositeOperation="source-over"}const W=Un(St,n,i,de.width,de.height);W&&Ra(r,de.width,de.height,(L,J,ae)=>W[ae]===0?0:1),s.globalCompositeOperation="lighter",s.drawImage(de,0,0,c,l),s.globalCompositeOperation="source-over"}_i(lt,ct),ut||(pe.style.display="",ut=!0)}function Kn(){if(Me)return Me;const e=document.createElement("div");return e.className="metal-fx-cursor-spill",e.setAttribute("aria-hidden","true"),e.style.cssText="position:fixed;left:0;top:0;pointer-events:none;z-index:2147483000;border-radius:50%;mix-blend-mode:plus-lighter;will-change:transform,opacity;opacity:0;display:none",document.body.appendChild(e),Me=e,e}function ca(){!Me||!dt||(Me.style.display="none",Me.style.opacity="0",dt=!1)}function Ii(e){if(Be=0,!Qe)return;const t=performance.now();try{Zn(e)}catch(a){Si=!0,Le(),ca(),te&&(te.cursorLight=null,te=null),typeof console<"u"&&console.warn("metal-fx: cursor light disabled after error",a);return}performance.now()-t>6?++bt>=20&&(bt=0,ji=performance.now()+5e3,Le()):bt>0&&bt--}function Zn(e){const t=at,a=Math.min(.05,Math.max(.001,(e-Zt)/1e3));Zt=e;let n=null,i=0,s=0;if(t.enabled&&b&&!Number.isNaN(xe)){let c=Number.POSITIVE_INFINITY;const l=Math.max(1,t.reach),d=t.cursor&&Ia()?Math.max(1,t.cursorDistance):0,u=Math.max(l,d);for(const h of b.instances){if(!h.visible||!h.canvas.isConnected)continue;const g=h.canvas.getBoundingClientRect();if(g.width<=0)continue;const x=h.overscan,v=g.width/(h.cssWidth+2*x),p=g.left+x*v,M=g.top+x*v,k=u*v;if(xe<p-k||xe>p+h.cssWidth*v+k||je<M-k||je>M+h.cssHeight*v+k)continue;const m=(xe-p)/v,f=(je-M)/v,S=qn(m,f,h.cssWidth,h.cssHeight,h.cornerRadius,h.kind,Lt),w=Math.abs(S);w<=u&&w<c&&(c=w,n=h,$.d=S,$.nx=Lt.x,$.ny=Lt.y,$.k=v,$.left=p,$.top=M)}if(n){if(c<=l){const h=1-c/l;i=h*h*(3-2*h)}c<=d&&(s=Math.min(1,(1-c/d)*3)),n.mask&&($.nx=n.cssWidth/2,$.ny=n.cssHeight/2,n.wantRaw=!0)}}const r=1-Math.exp(-(a*1e3)/(Math.max(1,t.fadeMs)/3));if(Ie+=(i-Ie)*r,Ne+=(s-Ne)*r,n&&n!==te&&(te&&(te.cursorLight=null,Ot(te,e)),te=n),!n&&Ie<.002&&Ne<.002){Ie=0,Ne=0,te&&(te.cursorLight=null,Ot(te,e),te=null),ca(),Le();return}if(te){if(t.catchLight){const c=te.cursorLight??(te.cursorLight={x:0,y:0,w:0});c.x=$.nx,c.y=$.ny,c.w=Ie}else te.cursorLight&&(te.cursorLight=null);if(Ot(te,e),t.cursor&&Ne>.002&&ia&&!ha&&!Number.isNaN(xe)&&Ia()&&Qn()&&Ri(xe,je)?Jn(te,t,Ne):Le(),t.spill){const c=Kn(),l=bi(te,$.nx,$.ny,2),d=Jt(te,$.nx,$.ny,3),u=Math.max(l.r,l.g,l.b)||1,h=di(l.r*255/u,l.g*255/u,l.b*255/u),[g,x,v]=ui(h[0],Math.min(1,h[1]*t.spillSaturation),1);be.r+=(g-be.r)*.15,be.g+=(x-be.g)*.15,be.b+=(v-be.b)*.15;const p=Math.round(be.r/6)*6,M=Math.round(be.g/6)*6,k=Math.round(be.b/6)*6,m=`radial-gradient(closest-side, rgba(${p},${M},${k},1) 0%, rgba(${p},${M},${k},0.35) 45%, rgba(${p},${M},${k},0) 100%)`;m!==ea&&(ea=m,c.style.background=m);const f=Math.max(1,t.spillRadius*$.k);f!==ta&&(ta=f,c.style.width=`${(2*f).toFixed(1)}px`,c.style.height=`${(2*f).toFixed(1)}px`),t.spillBlur!==aa&&(aa=t.spillBlur,c.style.filter=t.spillBlur>0?`blur(${t.spillBlur}px)`:"");const S=$.left+$.nx*$.k,w=$.top+$.ny*$.k,I=lt+(S-lt)*t.spillOffset,U=ct+(w-ct)*t.spillOffset;c.style.transform=`translate3d(${(I-f).toFixed(2)}px,${(U-f).toFixed(2)}px,0)`;const P=Math.min(1,Math.max(0,d/.3)),B=1-t.spillLumGain+t.spillLumGain*P,q=$.d<0?t.spillInside:1,D=Math.max(0,Math.min(1,t.spillStrength*Ie*B*q));dt||(c.style.display="",dt=!0),c.style.opacity=D.toFixed(3)}else ca();Be=requestAnimationFrame(Ii)}}const Tt=new Map;function eo(e,t){const a=Math.sqrt(12*e*e/t+1);let n=Math.floor(a);n%2===0&&n--;const i=n+2,s=(12*e*e-t*n*n-4*t*n-3*t)/(-4*n-4),r=Math.round(s),c=[];for(let l=0;l<t;l++)c.push(l<r?n:i);return c}function to(e,t,a,n,i){const s=1/(i+i+1);for(let r=0;r<n;r++){const c=r*a;let l=0;for(let d=-i;d<=i;d++)l+=e[c+Math.min(a-1,Math.max(0,d))];for(let d=0;d<a;d++){t[c+d]=l*s;const u=c+Math.max(0,d-i),h=c+Math.min(a-1,d+i+1);l+=e[h]-e[u]}}}function ao(e,t,a,n,i){const s=1/(i+i+1);for(let r=0;r<a;r++){let c=0;for(let l=-i;l<=i;l++)c+=e[Math.min(n-1,Math.max(0,l))*a+r];for(let l=0;l<n;l++){t[l*a+r]=c*s;const d=Math.max(0,l-i)*a+r,u=Math.min(n-1,l+i+1)*a+r;c+=e[u]-e[d]}}}function ma(e,t,a,n){if(n<=.05)return e;const i=new Float32Array(e.length);let s=e;for(const r of eo(n,3)){const c=(r-1)/2;to(s,i,t,a,c),ao(i,s,t,a,c)}return s}function io(e,t,a,n,i,s,r){const c=document.createElement("canvas");c.width=a,c.height=n;const l=c.getContext("2d",{willReadFrequently:!0}),d=new Float32Array(a*n);if(!l)return d;l.scale(i,i),l.strokeStyle="#fff",l.lineCap="round",l.lineJoin="round",l.lineWidth=t,l.beginPath(),l.moveTo(s-e,r),l.lineTo(s+e,r),l.stroke();const u=l.getImageData(0,0,a,n).data;for(let h=0,g=3;h<d.length;h++,g+=4)d[h]=u[g]/255;return d}function Ni(e,t,a,n,i){let s=0;for(const p of e)s=Math.max(s,(p.stroke/2+3*p.blur)*a);const r=Math.ceil(s)+1,c=2*t+2*r,l=2*r,d=Math.ceil(c*n),u=Math.ceil(l*n),h=new Float32Array(d*u);for(const p of e){let M=io(t,p.stroke*a,d,u,n,r,r);M=ma(M,d,u,p.blur*a*n);const k=p.opacity;for(let m=0;m<h.length;m++){const f=M[m]*k;h[m]=h[m]+f*(1-h[m])}}if(i>0){const p=r*n,M=r*n,k=i*a*n;for(let m=0;m<u;m++)for(let f=0;f<d;f++){const S=Math.hypot(f+.5-p,m+.5-M)/k;let w;S<=.3?w=1:S<=.65?w=1-(S-.3)/.35*.75:S<1?w=.25*(1-(S-.65)/.35):w=0,h[m*d+f]*=w}}const g=document.createElement("canvas");g.width=d,g.height=u;const x=g.getContext("2d"),v=new Uint8ClampedArray(d*u);for(let p=0;p<h.length;p++)v[p]=Math.round(Math.min(1,h[p])*255);if(x){const p=x.createImageData(d,u),M=p.data;for(let k=0,m=0;k<h.length;k++,m+=4)M[m]=255,M[m+1]=255,M[m+2]=255,M[m+3]=v[k];x.putImageData(p,0,0)}return{canvas:g,alpha:v,w:c,h:l,ax:r,ay:r}}function Pi(){return[A.haloStrokeXl,A.haloStrokeLg,A.haloStrokeMd,A.haloStrokeSm,A.haloBlurXl,A.haloBlurLg,A.haloBlurMd,A.haloBlurSm,A.haloOpXl,A.haloOpLg,A.haloOpMd,A.haloOpSm,A.extraStrokeOuter,A.extraStrokeCore,A.extraBlurOuter,A.extraBlurCore,A.extraFadeR,A.extraOpOuter].join(",")}function no(e,t,a){const n=`h|${e.toFixed(2)}|${t}|${a}|${Pi()}`;let i=Tt.get(n);return i||(i=Ni([{stroke:A.haloStrokeXl,blur:A.haloBlurXl,opacity:A.haloOpXl},{stroke:A.haloStrokeLg,blur:A.haloBlurLg,opacity:A.haloOpLg},{stroke:A.haloStrokeMd,blur:A.haloBlurMd,opacity:A.haloOpMd},{stroke:A.haloStrokeSm,blur:A.haloBlurSm,opacity:A.haloOpSm}],e,t,a,0),Tt.set(n,i)),i}function oo(e,t,a){const n=`e|${e.toFixed(2)}|${t}|${a}|${Pi()}`;let i=Tt.get(n);return i||(i=Ni([{stroke:A.extraStrokeOuter,blur:A.extraBlurOuter,opacity:A.extraOpOuter},{stroke:A.extraStrokeCore,blur:A.extraBlurCore,opacity:1}],e,t,a,A.extraFadeR),Tt.set(n,i)),i}function La(e,t,a,n,i){var s;const r=t<<16|a<<8|n;if(i.canvas&&i.tint===r&&i.src===e)return i.canvas;let c=i.canvas,l=i.img;(!c||!l||i.src!==e)&&(c=document.createElement("canvas"),c.width=e.canvas.width,c.height=e.canvas.height,l=((s=c.getContext("2d"))==null?void 0:s.createImageData(c.width,c.height))??null);const d=c.getContext("2d");if(d&&l){const u=l.data,h=e.alpha;for(let g=0,x=0;g<h.length;g++,x+=4)u[x]=t,u[x+1]=a,u[x+2]=n,u[x+3]=h[g];d.putImageData(l,0,0)}return i.canvas=c,i.img=l,i.tint=r,i.src=e,c}function pa(e,t,a){const n=Math.max(0,Math.min(a,Math.min(e,t)/2));return 2*Math.max(0,e-2*n)+2*Math.max(0,t-2*n)+2*Math.PI*n}function Rt(e,t,a,n){return n==="circle"?2*Math.PI*Math.max(0,Math.min(a,Math.min(e,t)/2)):pa(e,t,a)}function ht(e,t,a,n,i,s,r,c){const l=c||{x:0,y:0},d=Math.max(0,Math.min(n,Math.min(t,a)/2));if(r==="circle"){const k=2*Math.PI*d;if(k<=1e-4)return l.x=t*.5,l.y=a*.5,l;e=(e%k+k)%k;const m=-Math.PI/2+e/k*Math.PI*2,f=Math.max(0,d-i+s);return l.x=t*.5+f*Math.cos(m),l.y=a*.5+f*Math.sin(m),l}const u=Math.max(0,t-2*d),h=Math.max(0,a-2*d),g=Math.PI*d/2,x=2*(u+h)+4*g;e=(e%x+x)%x;const v=Math.max(0,d-i+s);let p=e;if(p<u)return l.x=d+p,l.y=i-s,l;if(p-=u,p<g){const k=-Math.PI/2+(g>0?p/g:0)*(Math.PI/2);return l.x=t-d+v*Math.cos(k),l.y=d+v*Math.sin(k),l}if(p-=g,p<h)return l.x=t-i+s,l.y=d+p,l;if(p-=h,p<g){const k=(g>0?p/g:0)*(Math.PI/2);return l.x=t-d+v*Math.cos(k),l.y=a-d+v*Math.sin(k),l}if(p-=g,p<u)return l.x=t-d-p,l.y=a-i+s,l;if(p-=u,p<g){const k=Math.PI/2+(g>0?p/g:0)*(Math.PI/2);return l.x=d+v*Math.cos(k),l.y=a-d+v*Math.sin(k),l}if(p-=g,p<h)return l.x=i-s,l.y=a-d-p,l;p-=h;const M=Math.PI+(g>0?p/g:0)*(Math.PI/2);return l.x=d+v*Math.cos(M),l.y=d+v*Math.sin(M),l}function ro(e,t,a,n,i,s){const r=Math.max(0,Math.min(i,Math.min(a,n)/2));if(s==="circle"){const w=2*Math.PI*r;return w<=1e-4?0:((Math.atan2(t-n/2,e-a/2)+Math.PI/2)/(2*Math.PI)*w%w+w)%w}const c=Math.max(0,a-2*r),l=Math.max(0,n-2*r),d=Math.PI*r/2,u=Math.PI/2,h=c,g=h+d,x=g+l,v=x+d,p=v+c,M=p+d,k=M+l,m=e>=r&&e<=a-r,f=t>=r&&t<=n-r;if(m&&f){const w=e,I=a-e,U=t,P=n-t,B=Math.min(w,I,U,P);return B===U?e-r:B===I?g+(t-r):B===P?v+(a-r-e):M+(n-r-t)}if(m)return t<n/2?e-r:v+(a-r-e);if(f)return e>a/2?g+(t-r):M+(n-r-t);if(e>a/2&&t<n/2){const w=Math.atan2(t-r,e-(a-r));return h+(w+u)/u*d}if(e>a/2){const w=Math.atan2(t-(n-r),e-(a-r));return x+w/u*d}if(t>n/2){const w=Math.atan2(t-(n-r),e-r);return p+(w-u)/u*d}const S=Math.atan2(t-r,e-r);return k+(S+Math.PI)/u*d}const Ft={x:0,y:0},Dt={x:0,y:0};function so(e,t,a,n,i,s){return ht(e-.1,t,a,n,i,0,s,Ft),ht(e+.1,t,a,n,i,0,s,Dt),Math.atan2(Dt.y-Ft.y,Dt.x-Ft.x)}function Fa(e,t,a){if(e===t)return a<e?0:1;const n=Math.max(0,Math.min(1,(a-e)/(t-e)));return n*n*(3-2*n)}function lo(e){if(e.samplePoints&&e.samplePoints.length>0)return e.samplePoints.map((i,s)=>({x:i.x,y:i.y,arc:s}));const t=Rt(e.width,e.height,e.cornerRadius,e.kind),a=A.inset*(e.scale??1),n=[];for(let i=0;i<wa;i++){const s=i/wa*t,r=ht(s,e.width,e.height,e.cornerRadius,a,0,e.kind);n.push({x:r.x,y:r.y,arc:s})}return n}const co=.05,uo=120*(1e3/15),Da=1e3/15,Va=2e3,Vt=400,ho=2.625,mo=1.008,po=.31,Ei=140,Bi=40,Oi=20,fo=34,Mt=.25,go=.01,Ua=.004,xo=.5,vo=3.5,me={x:0,y:0};function za(e,t){const{width:a,height:n}=t,i=t.scale??1,s=Math.min(3,typeof window<"u"&&window.devicePixelRatio||1),r=Rt(a,n,t.cornerRadius,t.kind)/pa(Ei,Bi,Oi),c=Math.max(1,A.haloHalfLen*r),l=Math.max(.6,A.extraHalfLen*r),d=no(c,i,s),u=oo(l,i,s),h=Math.ceil(Math.max(d.ay,u.ay)+A.extraOutward*r*i+2),g=document.createElement("div");g.className="metal-fx-glow-svg",g.setAttribute("aria-hidden","true");const x=document.createElement("div");x.className="metal-fx-glow-env",x.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0";const v=document.createElement("canvas");v.className="metal-fx-glow-canvas";const p=a+2*h,M=n+2*h;v.width=Math.ceil(p*s),v.height=Math.ceil(M*s),v.style.cssText=`position:absolute;left:${-h}px;top:${-h}px;width:${p}px;height:${M}px;pointer-events:none`,x.appendChild(v),g.appendChild(x),e.appendChild(g);const k=v.getContext("2d",{willReadFrequently:!!t.maskDataUrl});if(!k)throw new Error("metal-fx: glow canvas 2D context unavailable");const m={wrap:g,env:x,canvas:v,ctx:k,surroundPath:null,bandPath:null,maskAlpha:null,maskReady:!1,margin:h,dpr:s,halo:d,extra:u,haloTint:{canvas:null,img:null,tint:-1,src:null},extraTint:{canvas:null,img:null,tint:-1,src:null},mO:Xe(),mI:Xe(),maskSum:Number.NaN,maskDeformed:!1,deform:null,width:a,height:n,cornerRadius:t.cornerRadius,kind:t.kind,scale:i,perim:lo(t),pointMode:!!(t.samplePoints&&t.samplePoints.length>0),currentIdx:0,appearedAt:0,glowOpacity:0,relocTween:null,relocNextIdx:-1,relocMul:0,envClock:0,cursorMode:!1,cursorArc:0,cursorTargetArc:0,lastTickMs:0,wanderS:0,wanderTargetS:0,wanderFrames:0,tintFrom:{r:255,g:255,b:255},tintTarget:{r:255,g:255,b:255},tintTween:null,tintHoldUntil:0,dX:Number.NaN,dY:Number.NaN,dAng:Number.NaN,dEX:Number.NaN,dEY:Number.NaN,dHOp:Number.NaN,dEOp:Number.NaN,dHaloTint:"",dExtraTint:"",dirty:!0,dEnv:-1};if(t.maskDataUrl){const f=new Image;f.onload=()=>{const S=document.createElement("canvas");S.width=v.width,S.height=v.height;const w=S.getContext("2d",{willReadFrequently:!0});if(!w)return;w.scale(s,s),w.drawImage(f,h,h,a,n);const I=w.getImageData(0,0,S.width,S.height).data,U=S.width*S.height,P=new Float32Array(U);for(let C=0,G=3;C<U;C++,G+=4)P[C]=I[G]/255;const B=ma(Float32Array.from(P),S.width,S.height,vo*s);let q=0;for(let C=0;C<U;C++)B[C]>q&&(q=B[C]);const D=q>0?xo/q:0,V=new Uint8ClampedArray(U);for(let C=0;C<U;C++)V[C]=Math.round(Math.max(P[C],B[C]*D)*255);m.maskAlpha=V,m.maskReady=!0,m.dirty=!0},f.src=t.maskDataUrl}else da(m,null);return m}function da(e,t){if(e.pointMode)return;const{margin:a,width:n,height:i,cornerRadius:s}=e,r=e.kind==="circle"?2:1;Ye(0,0,n,i,s,t,e.mO),Ye(r,r,n-2*r,i-2*r,Math.max(0,s-r),t,e.mI);const c=new Path2D;Ut(c,e.mO,a);const l=new Path2D;Ut(l,e.mO,a),Ut(l,e.mI,a);const d=new Path2D;d.rect(0,0,n+2*a,i+2*a),d.addPath(c),e.surroundPath=d,e.bandPath=l,e.maskReady=!0}function Ut(e,t,a){const n=t.xy;for(let i=0;i<t.n;i++){const s=n[i*2]+a,r=n[i*2+1]+a;i===0?e.moveTo(s,r):e.lineTo(s,r)}e.closePath()}function bo(e,t){if(!e)return 0;Ye(0,0,t.width,t.height,t.cornerRadius,e,t.mO);let a=0;const n=t.mO.xy;for(let i=0;i<t.mO.n;i+=4)a+=n[i*2]*1.37+n[i*2+1];return a}function yo(e,t){if(e.deform=t,!e.pointMode)if(t){const a=bo(t,e);a!==e.maskSum&&(e.maskSum=a,da(e,t),e.maskDeformed=!0,e.dirty=!0)}else e.maskDeformed&&(e.maskSum=Number.NaN,da(e,null),e.maskDeformed=!1,e.dirty=!0)}function wo(e,t,a,n,i="dark"){var s;const{width:r,height:c,cornerRadius:l,perim:d}=e;if(d.length===0)return!1;const u=2;let h=-1,g=e.currentIdx,x=0;for(let F=0;F<d.length;F++){const K=d[F],Y=Jt(t,K.x,K.y,u);Y>h&&(h=Y,g=F),F===e.currentIdx&&(x=Y)}const v=e.appearedAt>0&&a-e.appearedAt<A.minDwellMs,p=A.baseOp+(A.peakOp-A.baseOp)*Fa(A.lumLo,A.lumHi,x),M=!v&&h-x>co,k=t.cursorLight,m=at.enabled&&at.catchLight&&!e.pointMode&&!!k&&k.w>.02,f=Rt(r,c,l,e.kind);m&&(e.cursorTargetArc=ro(k.x,k.y,r,c,l,e.kind));const S=m?Math.min(1,A.peakOp*at.catchGain*k.w):0,w=e.lastTickMs>0?Math.min(200,Math.max(.5,a-e.lastTickMs)):Da;e.lastTickMs=a,e.envClock+=Math.min(w,fo);const I=F=>1-Math.pow(1-F,w/Da),U=Math.max(1,A.relocFadeMs),P=Math.max(1,A.relocFadeOutMs),B=-2,q=-3,D=()=>{e.appearedAt=a,e.wanderS=0,e.wanderTargetS=0,e.wanderFrames=0,e.relocTween=Ke(0,1,U,Kt.smoothstep),Ze(e.relocTween,e.envClock)},V=F=>{e.relocNextIdx=F,e.relocTween=Ke(1,0,P,Kt.smoothstep),Ze(e.relocTween,e.envClock)};if((s=e.relocTween)!=null&&s.done&&e.relocTween.to===0){let F=e.relocNextIdx;if(F===B&&!m&&(F=q),F===q)e.cursorMode=!1,e.appearedAt=0,e.relocTween=null;else if(F===B)e.cursorMode=!0,e.cursorArc=e.cursorTargetArc,e.glowOpacity=S,D();else{e.currentIdx=F;const K=d[e.currentIdx],Y=Jt(t,K.x,K.y,u);e.glowOpacity=A.baseOp+(A.peakOp-A.baseOp)*Fa(A.lumLo,A.lumHi,Y),D()}}if((!e.relocTween||e.relocTween.done)&&(e.appearedAt===0?(m?(e.cursorMode=!0,e.cursorArc=e.cursorTargetArc,e.glowOpacity=S):(e.cursorMode=!1,e.currentIdx=g,e.glowOpacity=p),D()):m!==e.cursorMode?V(m?B:q):!e.cursorMode&&M&&V(g)),e.cursorMode){m&&(e.glowOpacity=S);const F=Math.max(.01,Math.min(1,at.catchFollow)),K=1-Math.pow(1-F,w/(1e3/60));let Y=e.cursorTargetArc-e.cursorArc;Y=(Y%f+f*1.5)%f-f/2,e.cursorArc+=Y*K}else e.glowOpacity+=(p-e.glowOpacity)*I(A.fadeRate);e.glowOpacity=Math.max(0,Math.min(1,e.glowOpacity)),e.relocMul=e.relocTween?Ca(e.relocTween,e.envClock):1;const C=Rt(r,c,l,e.kind)/pa(Ei,Bi,Oi),G=A.wanderRange*C;e.wanderFrames+=w,e.wanderFrames>=uo&&(e.wanderTargetS=(Math.random()*2-1)*G,e.wanderFrames=0),e.wanderS+=(e.wanderTargetS-e.wanderS)*I(A.wanderLerp);let z,y,_,j,T;if(e.pointMode){const F=d[e.currentIdx];z=F.x+e.wanderS,y=F.y,_=0,j=z,T=y}else{const F=e.cursorMode?e.cursorArc:d[e.currentIdx].arc+e.wanderS,K=A.inset*e.scale;ht(F,r,c,l,K,0,e.kind,me),z=me.x,y=me.y,_=so(F,r,c,l,K,e.kind);const Y=A.extraOutward*C*e.scale;ht(F,r,c,l,K,Y,e.kind,me),j=me.x,T=me.y}e.deform&&(e.deform(z,y,me),z=me.x,y=me.y,e.deform(j,T,me),j=me.x,T=me.y);const Q=i==="light",Z=Q?kn(t,z,y,u):bi(t,z,y,u);e.tintTween?e.tintTween.done&&(Q?(e.tintFrom={r:e.tintFrom.r+(e.tintTarget.r-e.tintFrom.r)*e.tintTween.val,g:e.tintFrom.g+(e.tintTarget.g-e.tintFrom.g)*e.tintTween.val,b:e.tintFrom.b+(e.tintTarget.b-e.tintFrom.b)*e.tintTween.val},e.tintTarget={...Z},e.tintTween=Ke(0,1,Vt),Ze(e.tintTween,a)):a>=e.tintHoldUntil&&(e.tintFrom={...e.tintTarget},e.tintTarget={...Z},e.tintTween=Ke(0,1,Vt),Ze(e.tintTween,a),e.tintHoldUntil=a+Va)):(e.tintFrom={...Z},e.tintTarget={...Z},e.tintTween=Ke(0,1,Vt),Ze(e.tintTween,a),e.tintHoldUntil=Q?0:a+Va),Ca(e.tintTween,a);const ne=e.tintTween.val;let O,E,H;if(Q)O=Math.round(e.tintFrom.r+(e.tintTarget.r-e.tintFrom.r)*ne),E=Math.round(e.tintFrom.g+(e.tintTarget.g-e.tintFrom.g)*ne),H=Math.round(e.tintFrom.b+(e.tintTarget.b-e.tintFrom.b)*ne);else{const F=e.tintFrom.r+(e.tintTarget.r-e.tintFrom.r)*ne,K=e.tintFrom.g+(e.tintTarget.g-e.tintFrom.g)*ne,Y=e.tintFrom.b+(e.tintTarget.b-e.tintFrom.b)*ne,he=Math.max(F,K,Y)||1;O=Math.round(255*(F/he)),E=Math.round(255*(K/he)),H=Math.round(255*(Y/he))}const W=`rgb(${O},${E},${H})`;let L="#ffffff";if(Q){const F=di(O,E,H),[K,Y,he]=ui(F[0],Math.min(1,F[1]*ho),Math.max(po,F[2]*mo));L=`rgb(${K},${Y},${he})`}const J=Math.max(0,Math.min(1,n))*(e.pointMode?A.pointGain:1),ae=Math.min(1,e.glowOpacity*A.haloOpMul*J),oe=Math.min(1,e.glowOpacity*A.extraIntensity*J);if(Math.abs(e.relocMul-e.dEnv)>.002){const F=e.relocMul>=.998&&e.dEnv<.998;e.dEnv=e.relocMul,e.env.style.opacity=e.relocMul.toFixed(3),F&&(e.dirty=!0)}const se=!!(e.relocTween&&!e.relocTween.done)||e.cursorMode,re=!(Math.abs(z-e.dX)<Mt&&Math.abs(y-e.dY)<Mt&&Math.abs(_-e.dAng)<go&&Math.abs(j-e.dEX)<Mt&&Math.abs(T-e.dEY)<Mt),le=!(Math.abs(ae-e.dHOp)<Ua&&Math.abs(oe-e.dEOp)<Ua),ue=W!==e.dHaloTint||L!==e.dExtraTint;return(e.dirty||re||le||ue)&&(e.dX=z,e.dY=y,e.dAng=_,e.dEX=j,e.dEY=T,e.dHOp=ae,e.dEOp=oe,e.dHaloTint=W,e.dExtraTint=L,e.dirty=!1,Mo(e,z,y,_,j,T,ae,oe,W,L)),se}function Mo(e,t,a,n,i,s,r,c,l,d){const{ctx:u,canvas:h,dpr:g,margin:x}=e;if(u.setTransform(1,0,0,1,0,0),u.globalCompositeOperation="source-over",u.globalAlpha=1,u.clearRect(0,0,h.width,h.height),r<=.002&&c<=.002||!e.maskReady)return;const v=r>.002?La(e.halo,...Wa(l),e.haloTint):null,p=c>.002?d==="#ffffff"?e.extra.canvas:La(e.extra,...Wa(d),e.extraTint):null,M=S=>{v&&(u.save(),u.translate(t+x,a+x),u.rotate(n),u.globalAlpha=r*S,u.drawImage(v,-e.halo.ax,-e.halo.ay,e.halo.w,e.halo.h),u.restore()),p&&(u.save(),u.translate(i+x,s+x),u.rotate(n),u.globalAlpha=c*S,u.drawImage(p,-e.extra.ax,-e.extra.ay,e.extra.w,e.extra.h),u.restore())};if(!e.pointMode&&e.surroundPath&&e.bandPath){u.save(),u.scale(g,g),u.clip(e.surroundPath,"evenodd"),M(.5),u.restore(),u.save(),u.scale(g,g),u.clip(e.bandPath,"evenodd"),M(1),u.restore();return}u.save(),u.scale(g,g),M(1),u.restore();const k=e.maskAlpha;if(!k)return;const m=u.getImageData(0,0,h.width,h.height),f=m.data;for(let S=0,w=3;S<k.length;S++,w+=4){const I=k[S];if(I!==255){if(I===0){f[w]=0;continue}f[w]=(f[w]*I+127)/255}}u.putImageData(m,0,0)}const Ue=[255,255,255];function Wa(e){if(e[0]==="#")return Ue[0]=parseInt(e.slice(1,3),16),Ue[1]=parseInt(e.slice(3,5),16),Ue[2]=parseInt(e.slice(5,7),16),Ue;let t=4,a=0,n=0;for(;t<e.length&&n<3;){const i=e.charCodeAt(t++);i>=48&&i<=57?a=a*10+(i-48):(i===44||i===41)&&(Ue[n++]=a,a=0)}return Ue}function ko(e,t){e.pointMode===t.pointMode&&(t.currentIdx=Math.min(e.currentIdx,Math.max(0,t.perim.length-1)),t.appearedAt=e.appearedAt,t.glowOpacity=e.glowOpacity,t.relocTween=e.relocTween,t.relocNextIdx=e.relocNextIdx,t.relocMul=e.relocMul,t.envClock=e.envClock,t.cursorMode=e.cursorMode,t.cursorArc=e.cursorArc,t.cursorTargetArc=e.cursorTargetArc,t.lastTickMs=e.lastTickMs,t.wanderS=e.wanderS,t.wanderTargetS=e.wanderTargetS,t.wanderFrames=e.wanderFrames,t.tintFrom=e.tintFrom,t.tintTarget=e.tintTarget,t.tintTween=e.tintTween,t.tintHoldUntil=e.tintHoldUntil,t.dEnv=e.relocMul,t.env.style.opacity=e.relocMul.toFixed(3))}const Ga=Object.freeze({offsetY:1,blur:.5,alpha:.9,color:"#ffffff"});function _o(e,t,a){const n=Math.min(3,typeof window<"u"&&window.devicePixelRatio||1),i=Math.ceil(3*a.blur+Math.abs(a.offsetY)+1),s=t.width+2*i,r=t.height+2*i,c=document.createElement("canvas");c.className="metal-fx-rim-canvas",c.setAttribute("aria-hidden","true"),c.width=Math.ceil(s*n),c.height=Math.ceil(r*n),c.style.cssText=`position:absolute;left:${-i}px;top:${-i}px;width:${s}px;height:${r}px;pointer-events:none`;const l=c.getContext("2d"),d=document.createElement("canvas");d.width=c.width,d.height=c.height;const u=d.getContext("2d",{willReadFrequently:!0});if(!l||!u)return null;e.appendChild(c);const h={canvas:c,ctx:l,scratch:d,sctx:u,width:t.width,height:t.height,cornerRadius:t.cornerRadius,kind:t.kind,ring:t.ring,margin:i,dpr:n,opts:a,mO:Xe(),mI:Xe(),sum:Number.NaN};return Li(h,null,!0),h}function Ha(e,t,a){const n=t.xy;for(let i=0;i<t.n;i++){const s=n[i*2]+a,r=n[i*2+1]+a;i===0?e.moveTo(s,r):e.lineTo(s,r)}e.closePath()}function Li(e,t,a=!1){const{width:n,height:i,cornerRadius:s,ring:r,margin:c,dpr:l}=e;Ye(0,0,n,i,s,t,e.mO),Ye(r,r,n-2*r,i-2*r,Math.max(0,s-r),t,e.mI);let d=0;const u=e.mO.xy;for(let C=0;C<e.mO.n;C+=4)d+=u[C*2]*1.37+u[C*2+1];if(!a&&d===e.sum)return;e.sum=d;const{sctx:h,scratch:g,ctx:x,canvas:v,opts:p}=e,M=g.width,k=g.height;h.setTransform(1,0,0,1,0,0),h.clearRect(0,0,M,k),h.scale(l,l),h.fillStyle="#fff",h.beginPath(),Ha(h,e.mO,c),Ha(h,e.mI,c),h.fill("evenodd");const m=h.getImageData(0,0,M,k).data,f=M*k,S=new Float32Array(f);for(let C=0,G=3;C<f;C++,G+=4)S[C]=m[G]/255;const w=Math.round(p.offsetY*l)*M,I=new Float32Array(f);if(w>=0)for(let C=0;C<f;C++)I[C]=Math.max(0,S[C]-(C>=w?S[C-w]:0));else for(let C=0;C<f;C++)I[C]=Math.max(0,S[C]-(C-w<f?S[C-w]:0));const U=ma(I,M,k,p.blur*l),P=parseInt(p.color.slice(1,3),16),B=parseInt(p.color.slice(3,5),16),q=parseInt(p.color.slice(5,7),16),D=x.createImageData(M,k),V=D.data;for(let C=0,G=0;C<f;C++,G+=4)V[G]=P,V[G+1]=B,V[G+2]=q,V[G+3]=Math.round(Math.min(1,U[C]*S[C]*p.alpha)*255);x.setTransform(1,0,0,1,0,0),x.putImageData(D,0,0)}function $a(e){e&&e.canvas.remove()}const jt=12,qa=32,Xa=1,Ya=.55,So=1,jo=1,Co=.85,Ao=0,To=1.3,Qa=3.6,Ro=.7,Io=1,No=.52,Po=1,Eo=.044,Bo=235,Oo=2.535,Ja=.7,Lo=.5,Fo=new Set(["INPUT","TEXTAREA","SELECT","OPTION"]);function Do(e,t){const a=Math.max(e.left-t.right,t.left-e.right,0),n=Math.max(e.top-t.bottom,t.top-e.bottom,0);return Math.sqrt(a*a+n*n)}function Vo(e,t,a,n){return!(Math.min(e.bottom,t.bottom)-Math.max(e.top,t.top)<a||Math.max(e.left-t.right,t.left-e.right,0)>n)}function Uo(e,t,a,n){return Math.min(e.right,t.right)-Math.max(e.left,t.left)<a?!1:Math.max(e.top-t.bottom,t.top-e.bottom,0)<=n}function Oe(e,t,a,n,i,s){const r=Math.max(0,Math.min(s,n*.5,i*.5)),c=e.roundRect;if(typeof c=="function"){c.call(e,t,a,n,i,r);return}e.moveTo(t+r,a),e.lineTo(t+n-r,a),e.quadraticCurveTo(t+n,a,t+n,a+r),e.lineTo(t+n,a+i-r),e.quadraticCurveTo(t+n,a+i,t+n-r,a+i),e.lineTo(t+r,a+i),e.quadraticCurveTo(t,a+i,t,a+i-r),e.lineTo(t,a+r),e.quadraticCurveTo(t,a,t+r,a)}function Fi(e,t,a,n,i){if(!i.flipX&&!i.flipY){e.drawImage(t,i.sx??0,i.sy??0,a,n,i.x,i.y,i.w,i.h);return}e.save(),i.flipX&&(e.translate(i.x+i.w,0),e.scale(-1,1)),i.flipY&&(e.translate(0,i.y+i.h),e.scale(1,-1)),e.drawImage(t,i.sx??0,i.sy??0,a,n,i.flipX?0:i.x,i.flipY?0:i.y,i.w,i.h),e.restore()}const zo=4;function Wo(e,t,a,n,i,s,r){if(n<=2*r||i<=2*r){e.beginPath(),Oe(e,t,a,n,i,s),e.clip();return}e.beginPath(),Oe(e,t,a,n,i,s),Oe(e,t+r,a+r,n-2*r,i-2*r,Math.max(0,s-r)),e.clip("evenodd")}function Go(e,t,a,n,i,s,r,c,l,d,u,h){const g=h??Math.max(1,Math.round((jt+zo*3)*u));let x=Math.max(0,r),v=!0;for(let p=0;p<3&&x>1e-4;p++){const M=Math.min(1,x);e.save(),Wo(e,d.x,d.y,d.w,d.h,d.r,g),e.globalCompositeOperation=v?"source-over":"lighter",v=!1,e.globalAlpha=M,Fi(e,t,a,n,l),e.globalAlpha=1,e.globalCompositeOperation="destination-in",e.fillStyle=c,e.fillRect(0,0,i,s),e.restore(),x-=M}}function Di(e,t,a,n,i,s,r){const c=r|0;if(c<1||n<=2*c||i<=2*c){e.beginPath(),Oe(e,t,a,n,i,s),e.clip();return}e.beginPath(),Oe(e,t,a,n,i,s),Oe(e,t+c,a+c,n-2*c,i-2*c,Math.max(0,s-c)),e.clip("evenodd")}function Ho(e,t,a,n,i,s,r,c,l,d,u,h){let g=c*u,x=!0;for(let v=0;v<3&&g>1e-4;v++){const p=Math.min(1,g);e.save(),Di(e,r.x,r.y,r.w,r.h,r.r,l),e.globalCompositeOperation=x?"source-over":"lighter",x=!1,e.globalAlpha=p,Fi(e,t,a,n,h),e.globalAlpha=1,e.globalCompositeOperation="destination-in",e.fillStyle=d,e.fillRect(0,0,i,s),e.restore(),g-=p}}function $o(e,t,a,n,i,s,r,c){const l=e.createLinearGradient(n,i,s,r);l.addColorStop(0,`rgba(255,255,255,${c.toFixed(3)})`),l.addColorStop(.5,`rgba(255,255,255,${(c*.45).toFixed(3)})`),l.addColorStop(1,"rgba(255,255,255,0)"),e.save(),Di(e,t.x,t.y,t.w,t.h,t.r,a),e.globalCompositeOperation="lighter",e.lineWidth=a*2,e.strokeStyle=l,e.beginPath(),Oe(e,t.x,t.y,t.w,t.h,t.r),e.stroke(),e.restore()}function Vi(e){const t=getComputedStyle(e),a=[parseFloat(t.borderTopLeftRadius)||0,parseFloat(t.borderTopRightRadius)||0,parseFloat(t.borderBottomRightRadius)||0,parseFloat(t.borderBottomLeftRadius)||0].filter(n=>n>0);return a.length?Math.min.apply(null,a):0}function Ui(e){const t=getComputedStyle(e),a=Math.max(parseFloat(t.borderTopWidth)||0,parseFloat(t.borderRightWidth)||0,parseFloat(t.borderBottomWidth)||0,parseFloat(t.borderLeftWidth)||0);let n=0,i=0;const s=t.boxShadow;if(s&&s!=="none"){const c=s.replace(/rgba?\([^)]*\)/g,u=>u.replace(/,/g,"\0")).split(/,\s*/);let l=1/0,d=1/0;for(const u of c){const h=u.match(/-?\d+(?:\.\d+)?px/g);if(!h||h.length<4)continue;const g=parseFloat(h[3]);g>0&&(/\binset\b/.test(u)?g<l&&(l=g):g<d&&(d=g))}Number.isFinite(l)&&(n=l),Number.isFinite(d)&&(i=d)}const r=Math.max(a,i);return{width:Math.max(a,n,i)||1,outerCssPx:r}}function Ka(e){e.cornerRadius=Vi(e.el);const t=Ui(e.el);e.hairlineWidth=t.width,e.hairlineOuterCssPx=t.outerCssPx}function qo(e){typeof ResizeObserver<"u"&&(e.resizeObserver=new ResizeObserver(()=>Ka(e)),e.resizeObserver.observe(e.el)),typeof MutationObserver<"u"&&(e.mutationObserver=new MutationObserver(()=>Ka(e)),e.mutationObserver.observe(e.el,{attributes:!0,attributeFilter:["style","class"]}))}function Xo(e){var t,a;(t=e.resizeObserver)==null||t.disconnect(),e.resizeObserver=null,(a=e.mutationObserver)==null||a.disconnect(),e.mutationObserver=null}const Ae=new Set,Yo=Object.freeze({enabled:!0,radius:11.5,strength:.57,penumbra:.55,falloff:.21,edgeFade:.7,softness:.24,repaintMs:36}),Pt={...Yo};let Se=null,zt=0,Za=0,ei=!1;function fa(){zt!==0||typeof requestAnimationFrame>"u"||(zt=requestAnimationFrame(e=>{if(zt=0,e-Za<Pt.repaintMs){fa();return}Za=e,Wi()}))}let It=!1;function Qo(e,t){const a=Pt.radius;for(const n of Ae){const i=n.anchorEl.getBoundingClientRect(),s=n.el.getBoundingClientRect(),r=Math.min(i.left,s.left)-a,c=Math.max(i.right,s.right)+a,l=Math.min(i.top,s.top)-a,d=Math.max(i.bottom,s.bottom)+a;if(e>=r&&e<=c&&t>=l&&t<=d)return!0}return!1}function ti(e){if(Se={x:e.clientX,y:e.clientY},!Pt.enabled)return;const t=Qo(e.clientX,e.clientY);(t||It)&&fa(),It=t}function kt(){Se=null,It&&fa(),It=!1}function zi(e){typeof document>"u"||e===ei||(ei=e,e?(document.addEventListener("pointermove",ti,{passive:!0}),document.addEventListener("pointerleave",kt),window.addEventListener("blur",kt)):(document.removeEventListener("pointermove",ti),document.removeEventListener("pointerleave",kt),window.removeEventListener("blur",kt),Se=null))}function Jo(e,t,a,n,i,s,r,c,l){if(!Se)return;const d=Pt;if(!d.enabled||d.strength<=0)return;const u=d.radius;let h,g,x,v,p,M;if(i){const _=a.left>=n.right;h=_?n.right:a.right,g=_?a.left:n.left,x=Se.x,v=Se.y,p=Math.max(a.top,n.top),M=Math.min(a.bottom,n.bottom)}else{const _=a.top>=n.bottom;h=_?n.bottom:a.bottom,g=_?a.top:n.top,x=Se.y,v=Se.x,p=Math.max(a.left,n.left),M=Math.min(a.right,n.right)}const k=Math.min(h,g),m=Math.max(h,g),f=Math.max(1,m-k);if(x<k-u||x>m+u||v<p-u||v>M+u)return;const S=Math.max(0,Math.min(1,Math.abs(x-h)/f)),w=Math.max(.5,u*d.edgeFade),I=Math.min(1,Math.min(x-(k-u),m+u-x)/w),U=Math.min(1,Math.min(v-(p-u),M+u-v)/w),P=d.strength*(1-d.falloff*S)*I*U;if(P<=.001)return;const B=u*l*(1+d.penumbra*S),q=i?(v-n.top+c)*l:(v-n.left+c)*l,D=Math.max(0,Math.min(.5,(1-d.softness)*.5)),V=Math.max(.001,.5-D),C=i?r:s,G=Math.max(0,Math.floor(q-B)),z=Math.min(C,Math.ceil(q+B));if(z<=G)return;const y=new Float32Array(z-G);for(let _=G;_<z;_++){const j=(_+.5-(q-B))/(2*B),T=j<V?j/V:j>1-V?(1-j)/V:1;y[_-G]=1-P*Math.max(0,Math.min(1,T))}for(const _ of[e,t]){const j=i?0:G,T=i?G:0,Q=i?s:z-G,Z=i?z-G:r,ne=_.getImageData(j,T,Q,Z),O=ne.data;if(i)for(let E=0;E<Z;E++){const H=y[E];if(!(H>=.999))for(let W=E*Q*4+3,L=(E+1)*Q*4;W<L;W+=4)O[W]=O[W]*H}else for(let E=0;E<Z;E++)for(let H=0;H<Q;H++){const W=y[H];if(W>=.999)continue;const L=(E*Q+H)*4+3;O[L]=O[L]*W}_.putImageData(ne,j,T)}}let ye=null,ze=null,We=null,Ge=null;function Ko(e,t){return ye||(ye=document.createElement("canvas"),ze=document.createElement("canvas"),We=ye.getContext("2d",{alpha:!0}),Ge=ze.getContext("2d",{alpha:!0})),!We||!Ge||!ye||!ze?!1:(ye.width!==e&&(ye.width=e,ze.width=e),ye.height!==t&&(ye.height=t,ze.height=t),We.setTransform(1,0,0,1,0,0),Ge.setTransform(1,0,0,1,0,0),We.globalCompositeOperation="source-over",Ge.globalCompositeOperation="source-over",We.clearRect(0,0,e,t),Ge.clearRect(0,0,e,t),!0)}function Zo(e,t,a,n=1){if(typeof document>"u"||Fo.has(e.tagName))return null;for(const v of Ae)if(v.el===e)return v.strength=n,v;const i=document.createElement("div");i.setAttribute("data-metal-fx-reflection",""),i.setAttribute("aria-hidden","true");const s=document.createElement("canvas");s.className="metal-fx-reflection-canvas";const r=s.getContext("2d",{alpha:!0,willReadFrequently:!0});if(!r)return null;const c=document.createElement("canvas");c.className="metal-fx-reflection-stroke-canvas";const l=c.getContext("2d",{alpha:!0,willReadFrequently:!0});if(!l)return null;i.appendChild(s),i.appendChild(c);const d=getComputedStyle(e);let u=!1;d.position==="static"&&(e.style.position="relative",u=!0);let h=!1;d.isolation!=="isolate"&&(e.style.isolation="isolate",h=!0),e.setAttribute("data-metal-fx-reflect-host",""),e.insertBefore(i,e.firstChild);const g=Ui(e),x={el:e,anchor:t,anchorEl:a,strength:n,wrap:i,canvas:s,ctx:r,strokeCanvas:c,strokeCtx:l,cornerRadius:Vi(e),hairlineWidth:g.width,hairlineOuterCssPx:g.outerCssPx,appliedPositionRelative:u,appliedIsolation:h,resizeObserver:null,mutationObserver:null};return qo(x),Ae.add(x),zi(!0),x}function er(e){for(const t of Ae)if(t.el===e){Xo(t),t.canvas.width=0,t.canvas.height=0,t.strokeCanvas.width=0,t.strokeCanvas.height=0,t.wrap.parentNode===t.el&&t.el.removeChild(t.wrap),t.el.removeAttribute("data-metal-fx-reflect-host"),t.appliedPositionRelative&&(t.el.style.position=""),t.appliedIsolation&&(t.el.style.isolation=""),Ae.delete(t),Ae.size===0&&zi(!1);return}}function tr(e,t,a,n,i){if(n<1||i<1)return null;const s=e.getContext("2d");if(!s)return null;const r=s.getImageData(t,a,n,i).data;let c=n,l=i,d=-1,u=-1;for(let h=0;h<i;h++){const g=h*n;for(let x=0;x<n;x++)r[(g+x)*4+3]>8&&(x<c&&(c=x),x>d&&(d=x),h<l&&(l=h),h>u&&(u=h))}return d<0?null:{x:t+c,y:a+l,w:d-c+1,h:u-l+1}}function Wi(){if(Ae.size===0)return;const e=typeof window<"u"&&window.devicePixelRatio||1,t=new Map;for(const a of Ae){const n=a.el.getBoundingClientRect();let i=t.get(a.anchorEl);if(i||(i=a.anchorEl.getBoundingClientRect(),t.set(a.anchorEl,i)),n.width<1||n.height<1||i.width<1||i.height<1)continue;const s=a.el.hasAttribute("data-metal-fx-text");if(s&&!a.glyphStyled&&(a.canvas.style.filter="blur(0.4px) saturate(1.35) brightness(1.2)",a.glyphStyled=!0),!Vo(i,n,Xa,qa)&&!Uo(i,n,Xa,qa)){a.canvas.width!==1&&(a.canvas.width=1,a.canvas.height=1),a.strokeCanvas.width!==1&&(a.strokeCanvas.width=1,a.strokeCanvas.height=1);continue}const r=s&&!!a.anchor.mask;r&&!a.anchor.wantRaw&&(a.anchor.wantRaw=!0),a.anchor.wantRing||(a.anchor.wantRing=!0);const c=!!a.anchor.deform&&!!a.anchor.ringCanvas,l=r&&a.anchor.rawCanvas?a.anchor.rawCanvas:c?a.anchor.ringCanvas:a.anchor.canvas,d=Math.round(a.anchor.overscan*e);let u=d,h=d,g=(l.width|0)-2*d,x=(l.height|0)-2*d;if(a.anchor.mask&&!r){const Z=tr(l,u,h,g,x);Z&&(u=Z.x,h=Z.y,g=Z.w,x=Z.h)}if(g<4||x<4)continue;const v=(i.left+i.right)*.5,p=(i.top+i.bottom)*.5,M=(n.left+n.right)*.5,k=(n.top+n.bottom)*.5,m=v-M,f=p-k,S=Math.max(i.left-n.right,n.left-i.right,0),w=Math.max(i.top-n.bottom,n.top-i.bottom,0),I=S>=w,U=Do(i,n);let P=1-Math.min(1,U/jt);P=P*P*(3-2*P);const B=Ya+(So-Ya)*P,q=Math.min(Qa,B*To*Ro)*a.strength,D=i.left>=n.left&&i.right<=n.right&&i.top>=n.top&&i.bottom<=n.bottom?[!0,!1]:[I],V=a.anchor.scale??1,C=Math.max(Io*V,a.hairlineWidth),G=Math.max(1,Math.round(C*e)),z=Math.max(1,Math.round(Math.max(Po*V,a.hairlineWidth)*e)),y=a.hairlineOuterCssPx;a.wrap.style.inset=`${-y}px`,a.wrap.style.borderRadius=`${Math.max(0,a.cornerRadius)}px`;const _=Math.max(1,Math.round((n.width+y*2)*e)),j=Math.max(1,Math.round((n.height+y*2)*e));a.canvas.width!==_&&(a.canvas.width=_),a.canvas.height!==j&&(a.canvas.height=j),a.strokeCanvas.width!==_&&(a.strokeCanvas.width=_),a.strokeCanvas.height!==j&&(a.strokeCanvas.height=j);const T=a.ctx;T.setTransform(1,0,0,1,0,0),T.clearRect(0,0,_,j);const Q=a.strokeCtx;Q.setTransform(1,0,0,1,0,0),Q.clearRect(0,0,_,j);for(const[Z,ne]of D.entries()){const O=Z>0&&Ko(_,j),E=O?We:T,H=O?Ge:Q,W=Math.min((s?jt*1.5:jt)*e,Math.max(_,j));let L,J,ae,oe;ne?(L=m>0?_:0,ae=m>0?_-W:W,J=j*.5,oe=j*.5):(J=f>0?j:0,oe=f>0?j-W:W,L=_*.5,ae=_*.5);const se=T.createLinearGradient(L,J,ae,oe);se.addColorStop(0,`rgba(0,0,0,${jo})`),se.addColorStop(.5,`rgba(0,0,0,${Co})`),se.addColorStop(1,`rgba(0,0,0,${Ao})`);const re=g/e,le=s?Math.max(1,Math.min(ne?_:j,Math.round(ne?g:x))):Math.max(1,Math.round(Bo*Math.max(.1,re/140)*e));let ue,F,K,Y,he=!1,Je=!1;if(ne){const X=Math.max(i.top,n.top),ee=Math.min(i.bottom,n.bottom);he=!0,ue=m>0?_-le:0,F=Math.round((X-n.top+y)*e),K=le,Y=Math.max(1,Math.round((ee-X)*e))}else{const X=Math.max(i.left,n.left),ee=Math.min(i.right,n.right);Je=!0,ue=Math.round((X-n.left+y)*e),F=f>0?j-le:0,K=Math.max(1,Math.round((ee-X)*e)),Y=le}const pt={x:ue,y:F,w:K,h:Y,flipX:he,flipY:Je,sx:u,sy:h},ke={x:0,y:0,w:_,h:j,r:Math.max(0,a.cornerRadius*e)},N=s?Math.min(1,q*Ja):Math.min(Qa,q*Oo*Ja*Lo);Go(E,l,g,x,_,j,N,se,pt,ke,e,s?Math.max(_,j):void 0),s||(Ho(H,l,g,x,_,j,ke,q,G,se,No,pt),$o(H,ke,z,L,J,ae,oe,Math.min(.85,Eo*q))),O&&(T.globalCompositeOperation="lighter",T.drawImage(ye,0,0),Q.globalCompositeOperation="lighter",Q.drawImage(ze,0,0))}for(const Z of D)Jo(T,Q,i,n,Z,_,j,y,e);T.globalCompositeOperation="source-over",Q.globalCompositeOperation="source-over"}}let Wt=!1,ai=0;function ar(){Wt||(Wt=!0,!(typeof requestAnimationFrame>"u")&&requestAnimationFrame(e=>{Wt=!1,!(e-ai<Zi)&&(ai=e,Wi())}))}const ii="metal-fx-styles",ir=`
.metal-fx-root {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  isolation: isolate;
  overflow: visible;
  background: #272727;
  color: #f8f8f8;
}
.metal-fx-root[data-theme='light'] {
  background: #ffffff;
  color: #1d1d1d;
}

.metal-fx-root::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  z-index: 2;
  box-shadow: inset 0 0 50px 0 rgba(255, 255, 255, 0.02);
}
.metal-fx-root[data-theme='light']::before {
  box-shadow: inset 0 0 50px 0 rgba(0, 0, 0, 0.02);
}

.metal-fx-root::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  z-index: 4;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}
.metal-fx-root[data-theme='light']::after {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
}
/* Circle variant gets a thicker outer rim than the button variant. */
.metal-fx-root[data-variant='circle']::after {
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.1);
}
.metal-fx-root[data-theme='light'][data-variant='circle']::after {
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.06);
}

.metal-fx-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 0;
  pointer-events: none;
  border-radius: inherit;
}

/* The inner spacer — defines the inset geometry where the metal ring meets
   the interior (3 px for Button, 1-2 px for Circle) and carries the Circle dark
   hairline ('box-shadow: inset' rules below). Intentionally transparent so
   the wrapper's background propagates through to the punched shader centre,
   giving consumers a single surface tone to override. See "Single-surface
   background" in the file header for the rationale. */
.metal-fx-inner {
  position: absolute;
  inset: 3px;
  border-radius: inherit;
  z-index: 1;
  pointer-events: none;
}

.metal-fx-root[data-variant='button'][data-shape='pill'] .metal-fx-inner {
  border-radius: calc(var(--mfx-radius, 20px) - 3px);
}
.metal-fx-root[data-variant='button'][data-shape='circle'] .metal-fx-inner {
  border-radius: calc(var(--mfx-radius, 16px) - 3px);
}
.metal-fx-root[data-variant='circle'][data-shape='pill'] .metal-fx-inner {
  inset: 0;
  border-radius: var(--mfx-radius, 20px);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.45);
}
.metal-fx-root[data-variant='circle'][data-shape='circle'] .metal-fx-inner {
  inset: 0;
  border-radius: var(--mfx-radius, 16px);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.45);
}
/* Circle-variant hairline alpha — light mode.
   Source-of-truth: index.html L2261-2267. The 0.45-alpha black inset that
   reads as a single-pixel frame against the dark interior is too heavy
   on a #ffffff inner: it ends up looking like a hard 2-px black ring
   against the iridescent shader. Suppressed entirely (alpha 0) — the
   shader's own iridescent rim already defines the silhouette in light
   mode, so an extra dark hairline only competes with it. The rule is
   kept (rather than deleted) as a tunable hook in case a future variant
   wants to re-introduce a soft edge. NOTE: we keep the dark-mode inset
   and border-radius values because — unlike index.html — our renderer
   does NOT overscan the canvas in light mode, so there is no 1-px gap
   between inner element and shader to compensate for. */
.metal-fx-root[data-theme='light'][data-variant='circle'][data-shape='pill'] .metal-fx-inner,
.metal-fx-root[data-theme='light'][data-variant='circle'][data-shape='circle'] .metal-fx-inner {
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0);
}

/* ─── Combined glow SVG (z=3) ──────────────────────────────────────────────
   Single SVG per instance that holds BOTH the wide-halo group
   (#mfx_haloTravel) and the catch-light group (#mfx_extraTravel), exactly
   mirroring canonical's _buildGlowSvgInner (index.html L8078). One
   mix-blend-mode: screen lifts the combined composite onto the shader
   ring; per-frame opacity attributes on each inner group still drive the
   independent fade-in / fade-out cycles for the halo and the catch-light.

   Why a single SVG: the circle variant anchors halo + catch-light at the same
   perimeter point, so they overlap in the bright zone. Two separately-
   screened SVGs would double-screen the overlap (A + B + C - AB - AC -
   BC + ABC instead of A + B + C - AB - AC once both groups composite
   in source-over inside one SVG and then screen against the host once).
   That overlap looked muted versus canonical specifically on the circle
   variant where both layers travel together.

   Source-of-truth opacity: #btnGlowSvg drops to 0.7 in dark and 0.2746 in
   light (index.html L632/L643). */
.metal-fx-glow-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  z-index: 3;
  pointer-events: none;
  opacity: 0.7;
}
.metal-fx-root[data-theme='light'] .metal-fx-glow-svg {
  /* Light-mode 1-px overscan mirrors .btn-glow-svg in metal.html so the
     halo stays glued to the visible silhouette (the shader ring there sits
     1 px outside the host's padding box). */
  inset: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  mix-blend-mode: multiply;
  /* Source-of-truth: html[data-theme="light"] #btnGlowSvg { opacity: 0.2746 }
     → −35 % from 0.4225 from the original 0.7 dark-mode opacity. */
  opacity: 0.2746;
  filter: saturate(5.355) brightness(0.78);
}
/* Circle light-mode small variants (e.g. 36×36 send button): the geometrically
   shrunk halo loses density when multiplied against #ffffff. Mirror the
   canonical override at index.html L2316 — bump saturation + drop brightness
   so the small glow holds together visually. */
.metal-fx-root[data-variant='circle'][data-shape='circle'][data-theme='light'] .metal-fx-glow-svg {
  filter: saturate(7.5) brightness(0.6);
}

/* The wrapped child — hoisted into z=5 so it sits above every overlay, with
   normalized chrome so consumer button styles don't fight the metal frame. */
.metal-fx-content {
  position: relative;
  z-index: 5;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  pointer-events: none;
}
.metal-fx-content > * {
  pointer-events: auto;
}
.metal-fx-root[data-normalize='true'] .metal-fx-content > * {
  background: transparent !important;
  border: 0 !important;
  outline: 0 !important;
  box-shadow: none !important;
  /* Sizing: we deliberately DO NOT force \`width: 100%; height: 100%\` on the
     child here. That used to be the contract ("the wrapper is the visible
     button surface; the child stretches to fill it"), but it created a cyclic
     percentage dependency: the wrapper is \`inline-flex\` with no intrinsic
     size, .metal-fx-content is \`width/height: 100%\` of the wrapper, and the
     child was \`100%\` of .metal-fx-content. With nothing breaking the cycle,
     icon-only / class-sized children collapsed.

     The new contract: the child sizes itself (intrinsic content, CSS class,
     or inline style — all work), and the wrapper's \`inline-flex\` wraps it
     tightly. Consumers who want a metal frame BIGGER than the child (e.g.
     padding around an icon) size <MetalFx style={{ width, height }}> AND
     explicitly set width/height on the child to fill (or accept that the
     child renders at its intrinsic size, centered).

     Typography is intentionally NOT touched. We used to apply
     \`color: inherit; font: inherit;\` here to "match" the wrapper, but
     \`font: inherit\` is a shorthand that overrides font-family, font-size,
     font-weight, AND line-height on the child — which (a) shrank the
     button height (line-height changes propagate through the flex
     content box) and (b) scaled em-based icons / font-icons inside the
     child to whatever the wrapper inherited. The wrapper now stays out
     of the child's typography entirely; consumers who want typographic
     normalization can apply it themselves on the child element. */
}

[data-metal-fx-reflection] {
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: inherit;
  overflow: hidden;
  z-index: 0;
  isolation: isolate;
}
.metal-fx-reflection-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  filter: blur(4px) saturate(1.2) brightness(1.58);
}
.metal-fx-reflection-stroke-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  filter: saturate(1.35) brightness(1.75);
}
/* Hosts that participate as reflection targets need positioning + isolation
   so the wrap composites only against the host (not the parent stack). The
   wrap injects these inline as well, but stating them here keeps reflections
   working on hosts that already have other inline styles applied. */
[data-metal-fx-reflect-host] {
  isolation: isolate;
}
`;let Gt=!1;function nr(){if(Gt||typeof document>"u")return;if(document.getElementById(ii)){Gt=!0;return}const e=document.createElement("style");e.id=ii,e.textContent=ir,document.head.appendChild(e),Gt=!0}nr();const or={position:"absolute",inset:0,width:"100%",height:"100%"},rr={position:"absolute",inset:3},sr={position:"absolute",inset:0,pointerEvents:"none",zIndex:3,borderRadius:"inherit"},lr={position:"absolute",inset:0,pointerEvents:"none",zIndex:4},st=new Map;function cr(){const e=globalThis;e.__MFX_DEBUG__&&(e.__mfxGlow=st)}Nn((e,t)=>{const a=st.get(e);return a?wo(a.handles,e,t,e.opacityMul*e.glowGain,a.themeRef.current):!1});function dr(e){const[t,a]=R.useState(()=>e!=="auto"?e:typeof window>"u"||!window.matchMedia||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");return R.useEffect(()=>{if(e!=="auto"){a(e);return}if(typeof window>"u"||!window.matchMedia)return;const n=window.matchMedia("(prefers-color-scheme: dark)"),i=()=>a(n.matches?"dark":"light");return i(),n.addEventListener("change",i),()=>n.removeEventListener("change",i)},[e]),t}const Gi=R.forwardRef(function({children:e,variant:t="button",preset:a="chromatic",theme:n="auto",strength:i=1,glowGain:s=1,paused:r=!1,borderRadius:c,normalizeHostStyles:l=!0,reflectionTargets:d,disableGlow:u=!1,innerShadow:h,shaderScale:g,ringCssPx:x,scale:v=1,mask:p,glowMode:M="mask",className:k,style:m,...f},S){const w=R.useRef(null),I=R.useRef(null),U=R.useRef(null),P=R.useRef(null),B=R.useRef(null),q=R.useRef(null),D=R.useRef(null),V=R.useRef(null),C=R.useRef("dark"),G=R.useRef(0),[z,y]=R.useState(!1),_=dr(n),j=R.useMemo(()=>vn(),[]);C.current=_;const T=t==="circle"?"circle":"pill",Q=!u;R.useImperativeHandle(S,()=>w.current,[]);const Z=(O,E)=>{if(T==="circle")return Math.min(O,E)/2;const H=typeof c=="number"?c:(()=>{var W;const L=(W=q.current)==null?void 0:W.firstElementChild;if(L){const J=parseFloat(getComputedStyle(L).borderTopLeftRadius);if(Number.isFinite(J)&&J>0)return J}return G.current})();return Math.min(H,Math.min(O,E)/2)};R.useEffect(()=>{j&&In(a,_)},[a,_,j]),R.useEffect(()=>{const O=D.current;O&&Ve(O,{mask:p??null})},[p]),R.useEffect(()=>{const O=D.current;O&&Ve(O,{paused:r})},[r]),R.useEffect(()=>{const O=D.current;if(!O)return;const E={};g!==void 0&&(E.shaderScale=g),x!==void 0&&(E.ringCssPx=x),v!==void 0&&(E.scale=v),Object.keys(E).length>0&&Ve(O,E)},[g,x,v]),R.useLayoutEffect(()=>{const O=I.current,E=w.current,H=U.current;if(!O||!E||!j)return;{const N=getComputedStyle(E),X=parseFloat(N.borderTopLeftRadius);G.current=Number.isFinite(X)?X:0}const W=()=>{const N=E.getBoundingClientRect(),X=Math.max(1,Math.round(N.width)),ee=Math.max(1,Math.round(N.height));return{cssWidth:X,cssHeight:ee,cornerRadius:Z(X,ee)}},L=W();D.current=Sn({onComposite:()=>{const N=D.current,X=V.current;N&&X&&yo(X,N.deform);const ee=B.current;N&&ee&&Li(ee,N.deform)},hostCanvas:O,cssWidth:L.cssWidth,cssHeight:L.cssHeight,cornerRadius:L.cornerRadius,kind:T,paused:r,shaderScale:g,ringCssPx:x,scale:v,mask:p??null,onFirstCopy:()=>y(!0)}),E.style.setProperty("--mfx-radius",`${L.cornerRadius}px`),E.style.borderRadius=`${L.cornerRadius}px`;const J=(N,X)=>{if(!p||M==="ring")return{};const ee=window.devicePixelRatio||1,ce=document.createElement("canvas");ce.width=Math.max(1,Math.round(N*ee)),ce.height=Math.max(1,Math.round(X*ee));const ft=ce.getContext("2d");if(!ft)return{};ft.fillStyle="#fff",p(ft,ce.width,ce.height,ee);const Hi=ft.getImageData(0,0,ce.width,ce.height).data,xa=[],gt=Math.max(1,Math.round(2*ee));for(let xt=gt>>1;xt<ce.height;xt+=gt)for(let vt=gt>>1;vt<ce.width;vt+=gt)Hi[(xt*ce.width+vt)*4+3]>128&&xa.push({x:vt/ee,y:xt/ee});return{samplePoints:xa,maskDataUrl:ce.toDataURL("image/png")}};H&&(V.current=za(H,{width:L.cssWidth,height:L.cssHeight,cornerRadius:L.cornerRadius,kind:T,scale:v,...J(L.cssWidth,L.cssHeight)}));const ae=N=>{if(!H)return;const X=V.current;H.innerHTML="",V.current=za(H,{width:N.cssWidth,height:N.cssHeight,cornerRadius:N.cornerRadius,kind:T,scale:v,...J(N.cssWidth,N.cssHeight)}),X&&ko(X,V.current);const ee=D.current;ee&&V.current&&st.set(ee,{handles:V.current,themeRef:C})},oe=()=>h?h===!0?Ga:{...Ga,...h}:null,se=N=>{const X=P.current,ee=D.current;$a(B.current),B.current=null;const ce=oe();!X||!ee||!ce||(B.current=_o(X,{width:N.cssWidth,height:N.cssHeight,cornerRadius:N.cornerRadius,kind:T,ring:ee.ringCssPx},ce))};se(L);let re=0,le=L.cssWidth,ue=L.cssHeight,F=L.cornerRadius;const K=new ResizeObserver(()=>{re===0&&(re=requestAnimationFrame(()=>{re=0;const N=W(),X=D.current;!X||Math.abs(N.cssWidth-le)<.5&&Math.abs(N.cssHeight-ue)<.5&&Math.abs(N.cornerRadius-F)<.5||(le=N.cssWidth,ue=N.cssHeight,F=N.cornerRadius,Ve(X,{cssWidth:N.cssWidth,cssHeight:N.cssHeight,cornerRadius:N.cornerRadius}),E.style.setProperty("--mfx-radius",`${N.cornerRadius}px`),E.style.borderRadius=`${N.cornerRadius}px`,ae(N),se(N))}))});K.observe(E);let Y=null;const he=()=>{const N=D.current;if(N&&Rn(N)){const X=W();ae(X),se(X)}Je()},Je=()=>{Y==null||Y.removeEventListener("change",he),Y=typeof window.matchMedia=="function"?window.matchMedia(`(resolution: ${window.devicePixelRatio||1}dppx)`):null,Y==null||Y.addEventListener("change",he)};Je();const pt=Fn(N=>{N&&D.current&&ae(W())});let ke=null;return typeof IntersectionObserver<"u"&&(ke=new IntersectionObserver(N=>{const X=D.current;if(X)for(const ee of N)Tn(X,ee.isIntersecting)},{rootMargin:"64px"}),ke.observe(E)),D.current&&V.current&&(st.set(D.current,{handles:V.current,themeRef:C}),Cn(D.current)),Wn(),cr(),()=>{Gn(),$a(B.current),B.current=null,K.disconnect(),Y==null||Y.removeEventListener("change",he),ke==null||ke.disconnect(),pt(),re!==0&&cancelAnimationFrame(re);const N=D.current;N&&(st.delete(N),An(N),jn(N)),D.current=null,V.current=null,H&&(H.innerHTML="")}},[T]),R.useEffect(()=>{const O=D.current;O&&Ve(O,{opacityMul:Math.max(0,Math.min(1,i)),glowGain:Math.max(0,s)})},[i,s,t]),R.useEffect(()=>{const O=D.current,E=w.current;if(!O||!E||!d||_!=="dark")return;O.onAfterFrame=ar;const H=d.flatMap(W=>{const L="current"in W?W:W.ref,J="current"in W?1:W.strength??1;return L.current?[{el:L.current,strength:J}]:[]});for(const{el:W,strength:L}of H)Zo(W,O,E,L);return()=>{O.onAfterFrame=void 0;for(const{el:W}of H)er(W)}},[d,_]),R.useEffect(()=>{const O=w.current,E=D.current;if(!O||!E)return;const H=Z(E.cssWidth,E.cssHeight);Ve(E,{cornerRadius:H}),O.style.setProperty("--mfx-radius",`${H}px`),O.style.borderRadius=`${H}px`},[c,_,t,T]);const ne=R.useMemo(()=>({...m,"--mfx-strength":String(Math.min(1,Math.max(0,i))),opacity:z?1:0,visibility:z?"visible":"hidden",transition:z?"opacity 0.15s ease-out":"none"}),[m,i,z]);return j?o.jsxs("div",{...f,ref:w,className:k?`metal-fx-root ${k}`:"metal-fx-root","data-variant":t,"data-shape":T,"data-theme":_,"data-paused":r?"true":void 0,"data-normalize":l?"true":"false",style:ne,children:[o.jsx("canvas",{ref:I,className:"metal-fx-canvas",style:or}),o.jsx("div",{className:"metal-fx-inner","aria-hidden":"true",style:rr}),o.jsx("div",{ref:U,"aria-hidden":"true",style:{...sr,display:Q?void 0:"none"}}),h?o.jsx("div",{ref:P,"aria-hidden":"true",style:lr}):null,o.jsx("div",{ref:q,className:"metal-fx-content",children:e})]}):o.jsx("div",{...f,ref:w,className:k?`metal-fx-fallback ${k}`:"metal-fx-fallback","data-metal-fx-unsupported":"",style:{display:"inline-flex",...m},children:e})});Gi.displayName="MetalFx";const ur=Object.freeze({enabled:!0,applyTo:"ring",strength:.74,fadeInMs:200,fadeOutMs:350,smoothMs:140,reach:36,blob:13,liquidBlob:10,maxDisp:9,gain:.6,pressGain:.55,pullGain:.49,press:5,liquid:7.5,liquidReach:8,liquidStiffness:53,liquidDamping:9,stiffness:260,damping:13,mass:1,follow:.32,mapRes:2,smooth:.25});({...ur});const Pe="https://rzp.io/rzp/codegg",hr=new Date("2026-11-02T00:00:00+05:30"),ni=["$12K","$14K","$15K","$16K","$18K","$19K","$20K","$21K","$22K","$23K","$24K","$25K","$26K","$27K","$18K","$21K","$23K","$26K"],et=[{id:"01",title:"Discovery & Product Strategy",details:["Phase 1: goals, users and success metrics","Requirement mapping and scope definition","Architecture decisions and tech stack selection","Build a product roadmap","Build a feature prioritisation matrix"]},{id:"02",title:"Programming Foundations",details:["Phase 2: JavaScript, TypeScript and tooling setup","Variables, functions and control flow","Data types, modules and modern syntax","Build a CLI productivity tool","Build a data formatting script"]},{id:"03",title:"Data Structures in Practice",details:["Phase 3: arrays, objects, maps and sets","Working with JSON API responses","Functions, scope and pure helpers","Reusable utilities and type definitions","Build a task manager"]},{id:"04",title:"Project Structure & Tooling",details:["Phase 4: packages, bundlers and environment config","Folder structure and separation of concerns","Reading and writing JSON, CSV and files","Error handling and validation","Generate structured reports"]},{id:"05",title:"Errors & Clean Architecture",details:["Phase 5: exceptions, logging and tracing","try/catch, custom errors and boundaries","Classes, modules and composition","Know when abstraction is worth it","Refactor an app into clean modules"]},{id:"06",title:"Clean Code & HTTP",details:["Phase 6: naming, formatting and conventions","Config, constants and refactoring","Client/server architecture and REST","HTTP methods, headers, JSON and status codes","Explore live public API responses"]},{id:"07",title:"APIs & First Launch",details:["Phase 7: fetch, endpoints and API keys","Environment variables, timeouts and retries","Build an automated data pipeline","CSV/JSON input, API calls and reports","Publish Project 1 on GitHub with a README"]},{id:"08",title:"Git & Collaboration",details:["Phase 8: repositories, branches and commits","README, .gitignore and secret safety","Feature branches and pull requests","Code reviews, issues and merge conflicts","Use Git for every project"]},{id:"09",title:"SQL & Relational Data",details:["Phase 9: PostgreSQL, tables, keys and schemas","CREATE, INSERT, SELECT, UPDATE and DELETE","Filters, sorting, groups and aggregates","Joins, indexes and query performance","Build a users and orders database"]},{id:"10",title:"ORMs & Data Modeling",details:["Phase 10: TypeScript + PostgreSQL","ORM models, sessions and CRUD","Relationships and data modeling","Migrations and schema versioning","Design user, order and product schemas"]},{id:"11",title:"Caching & API Basics",details:["Phase 11: caching, TTL, sessions and rate limits","API framework setup and routing","GET, POST, path and query parameters","Request and response bodies","Build users, orders and health endpoints"]},{id:"12",title:"API Design & Services",details:["Phase 12: schemas and validation","Status codes, errors and REST naming","Service layer architecture","CRUD, services and dependencies","Build a complete REST API"]},{id:"13",title:"Auth & Async",details:["Phase 13: registration, login and password hashing","JWT, protected endpoints and secrets","CORS and essential security habits","async, await and concurrent calls","Build secure async endpoints"]},{id:"14",title:"Testing & Docker",details:["Phase 14: unit and API testing","Logs, retries, reliability and failure cases","Local versus production environments","Docker images, containers and Dockerfiles","Containerize your application"]},{id:"15",title:"Backend Capstone",details:["Phase 15: API + auth + database + cache","Service logic, integrations and tests","Launch, debug and test live endpoints","Production variables and health checks","Explain the full request lifecycle"]},{id:"16",title:"Modern Frontend with React",details:["Phase 16: components, props and state","Hooks, effects and events","Lists, forms and conditional rendering","Reusable component patterns","Build a dashboard UI"]},{id:"17",title:"Next.js & Server Rendering",details:["Phase 17: routing, layouts and data fetching","Server and client components","Static and dynamic rendering","SEO, metadata and images","Build a marketing site"]},{id:"18",title:"State & Data Fetching",details:["Phase 18: server state vs client state","Caching, revalidation and optimistic UI","Global stores and context","Loading, error and empty states","Build a data-rich app"]},{id:"19",title:"Mobile Apps with React Native",details:["Phase 19: components, navigation and styling","Native APIs and permissions","Offline storage and sync","App store build and release","Build a cross-platform mobile app"]},{id:"20",title:"Component Libraries & Design Systems",details:["Phase 20: tokens, theming and primitives","Accessible, reusable components","Documentation and Storybook","Versioning and publishing","Build a design system"]},{id:"21",title:"Responsive & Accessible UI",details:["Phase 21: layout, grid and breakpoints","Semantic HTML and ARIA","Keyboard navigation and focus","Colour contrast and motion","Audit and fix accessibility"]},{id:"22",title:"Performance & Core Web Vitals",details:["Phase 22: measuring real-world performance","Code splitting and lazy loading","Images, fonts and caching","Core Web Vitals budgets","Optimise a slow page"]},{id:"23",title:"Frontend Capstone",details:["Phase 23: connect frontend to live APIs","Auth flows and protected routes","Error handling and analytics","Accessibility and performance passes","Ship a production frontend"]},{id:"24",title:"Cloud Fundamentals",details:["Phase 24: cloud providers and core services","Compute, storage and networking","Managed databases and queues","Cost, regions and reliability","Launch to the cloud"]},{id:"25",title:"Containers & Orchestration",details:["Phase 25: images, containers and registries","Multi-stage builds and optimisation","Orchestration and scaling","Secrets and configuration","Ship a containerised app"]},{id:"26",title:"CI/CD Pipelines",details:["Phase 26: build, test and deploy automation","Environments and promotion","Rollbacks and blue/green deploys","Release notes and versioning","Automate the release pipeline"]},{id:"27",title:"Infrastructure as Code",details:["Phase 27: declarative infrastructure","Environments and reproducibility","Modules and reusable configs","Drift, state and secrets","Provision an environment from code"]},{id:"28",title:"Security & Authentication",details:["Phase 28: OWASP essentials","Input validation and rate limiting","Secrets, encryption and auditing","Dependency and supply-chain safety","Harden a production app"]},{id:"29",title:"Databases at Scale",details:["Phase 29: indexing and query tuning","Caching layers and read replicas","Backups, migrations and recovery","Consistency and partitioning","Scale a data-heavy service"]},{id:"30",title:"Observability & Monitoring",details:["Phase 30: logs, metrics and traces","Alerting and on-call basics","Dashboards and error tracking","Performance budgets and SLOs","Build a monitoring stack"]},{id:"31",title:"Testing Strategy & QA",details:["Phase 31: unit, integration and e2e","Test data and mocking","Coverage and flakiness","Performance and load testing","Build a reliable test suite"]},{id:"32",title:"AI Features & Integrations",details:["Phase 32: adding AI to products","AI APIs, prompts and guardrails","Responsive & Accessible UI and semantic search","Cost, latency and fallbacks","Ship an AI-powered feature"]},{id:"33",title:"Production Launch & Handover",details:["Phase 33: launch checklist and monitoring","Documentation and runbooks","Handover, training and ownership","Support windows and SLAs","Present the final product"]}],Ht=[{name:"Varan",before:"Freelance Frontend Engineer",after:"Head of Product · Fintech Startup",quote:"CodeGG rebuilt our core platform from the ground up. The team shipped faster than any agency we had worked with, and the quality was flawless. Our conversion rate doubled after launch."},{name:"Kota Santosh",before:"Founder | SaaS Startup",after:"CTO | E-commerce Startup",quote:"Santosh credits CodeGG as a major part of his product journey. From working alongside our team to shipping for media and film production houses, he says the partnership helped him move faster, strengthen his engineering skills, grow his network, and learn how to win and close clients. Today he runs production-ready products across the media industry."},{name:"Rahul Amancha",before:"Full-Stack Web & Automation Developer",after:"Full-Stack Web & Automation Developer",quote:"Working with CodeGG over the past 1.5 years has helped us grow far beyond our original scope. Collaborating closely with the team gave us hands-on experience with real client projects, automation, and integrations. CodeGG gave us a strong team, practical skills, valuable client exposure, and the confidence to keep exploring new technologies."},{name:"Arjun Verma",before:"$6K/mo · Backend Dev",after:"$21K · AI Developer",quote:"CodeGG's capstone project became my portfolio piece. Three offers in one week — I picked $21K. Completely unreal experience."},{name:"Neha Mehta",before:"$3.8K/mo · Junior Dev",after:"$13K · Full-Stack Engineer",quote:"The team doesn't just deliver — they push you to build things that matter. Best partner we've ever worked with."},{name:"Saurabh Kulkarni",before:"$7K/mo · 3 Yrs Backend",after:"$19K · MLOps Engineer",quote:"CodeGG helped us rebuild our backend in under 6 weeks. The deployment work alone was worth it."},{name:"Divya Rajput",before:"$4.5K/mo · IT Support",after:"Own Studio · $22K",quote:"CodeGG helped us launch and scale our product. We're serving more customers than ever, on our own terms."}],_t=[{...Ht[0],video:"/VarunCodeGGReview.mp4"},{...Ht[1],video:"/SantoshCodeGGReview.mp4"},{...Ht[2],video:"/CodeGGRahulReview.mp4"}],oi={initial:e=>({x:e>0?"100%":"-100%",opacity:0}),animate:{x:0,opacity:1},exit:e=>({x:e>0?"-100%":"100%",opacity:0})},$t=[{name:"P Hemanya Sai",image:"/student-reviewers/p-hemanya-sai.png",review:"Working with CodeGG felt like adding a senior engineering team overnight. They explained every decision clearly and delivered exactly what we scoped.",mentorship:5,course:5},{name:"Gundeboina Bharath",image:"/student-reviewers/gundeboina-bharath.png",review:"CodeGG combines sharp product thinking with hands-on engineering. Whenever we needed support, they were ready to help us ship.",mentorship:5,course:5},{name:"Anugolu Harshitha",image:"/student-reviewers/anugolu-harshitha.png",review:"CodeGG gave us real, measurable product outcomes. Clear communication made every milestone easy to follow.",mentorship:5,course:4},{name:"Harshith Singu",image:"/student-reviewers/harshith-singu.png",review:"CodeGG turned our idea into a clear, shippable roadmap. Building with them gave us momentum we did not have before.",mentorship:5,course:5},{name:"P N Uday Kiran",image:"/student-reviewers/p-n-uday-kiran.png",review:"CodeGG helped us build a product our users actually love. Clear process and attentive support made every sprint easier.",mentorship:5,course:4.5}],mr=[{q:"How do you run an engagement?",a:"We work in live, collaborative sprints with our engineers. You get real-time updates, demos, and a shared channel. Every kickoff, review, and decision is documented so you always have the full picture."},{q:"What are your working hours?",a:"We work across time zones and overlap with your team's hours for demos and decisions, so delivery never blocks on schedules."},{q:"What language do you work in?",a:"All communication, code, and documentation are delivered in English."},{q:"Do we own the code and documentation?",a:"You get full ownership of the source code, infrastructure, and documentation. Everything is yours, with no lock-in, from day one."},{q:"What support do we get after launch?",a:"Yes. Every engagement includes a post-launch support window. Whether it's a bug, a scaling issue, or a new feature, our team is here so your product never gets stuck."},{q:"What outcomes can we expect from working with you?",a:"You get production-grade software you fully own, complete documentation, and a team you can rely on. From clean architecture to scalable infrastructure, everything is built to last and easy to hand over to your team."},{q:"What is your refund policy?",a:`Any approved refunds will be processed only after the completion of the engagement period. Refunds will not be issued before the engagement starts or during the ongoing engagement.

Once the engagement period has ended, eligible refunds will be initiated through the original payment method. The time taken for the refund amount to reflect in your account may vary depending on the payment gateway and banking partner.

By signing the engagement agreement, clients acknowledge and agree to this refund processing timeline.`}];function pr(e){const[t,a]=R.useState({days:0,hours:0,minutes:0,seconds:0});return R.useEffect(()=>{const n=()=>{const s=e.getTime()-Date.now();if(s<=0){a({days:0,hours:0,minutes:0,seconds:0});return}a({days:Math.floor(s/864e5),hours:Math.floor(s%864e5/36e5),minutes:Math.floor(s%36e5/6e4),seconds:Math.floor(s%6e4/1e3)})};n();const i=setInterval(n,1e3);return()=>clearInterval(i)},[e]),t}function qt(){const e=R.useRef(null),[t,a]=R.useState(!1);return R.useEffect(()=>{const n=e.current;if(!n)return;const i=new IntersectionObserver(([s])=>{s.isIntersecting&&(a(!0),i.disconnect())},{threshold:.12});return i.observe(n),()=>i.disconnect()},[]),{ref:e,visible:t}}function ri({value:e,label:t}){return o.jsx("span",{className:"ai-review-stars","aria-label":`${t}: ${e} out of 5 stars`,children:Array.from({length:5},(a,n)=>{const i=Math.max(0,Math.min(1,e-n));return o.jsxs("span",{className:`ai-review-star ${i===1?"is-full":i>0?"is-half":""}`,children:[o.jsx(ba,{"aria-hidden":"true"}),o.jsx(ba,{"aria-hidden":"true"})]},n)})})}function fr(){const[e,t]=R.useState(0),a=$t[e];R.useEffect(()=>{const s=window.setInterval(()=>t(r=>(r+1)%$t.length),7e3);return()=>window.clearInterval(s)},[]);const n={initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:-5}},i={initial:{opacity:0,scale:1.025},animate:{opacity:1,scale:1},exit:{opacity:0,scale:1.012}};return o.jsxs("section",{className:"ai-flow-section ai-review-section","aria-labelledby":"ai-review-title",children:[o.jsxs("div",{className:"ai-flow-panel ai-review-panel",children:[o.jsxs("div",{className:"ai-flow-copy ai-review-copy","aria-live":"polite",children:[o.jsx(Ct,{mode:"wait",initial:!1,children:o.jsxs(At.div,{className:"ai-review-copy-content",variants:n,initial:"initial",animate:"animate",exit:"exit",transition:{duration:.34,ease:[.22,1,.36,1]},children:[o.jsx("p",{className:"ai-review-eyebrow",children:"Client stories"}),o.jsx("h2",{id:"ai-review-title",children:"Built with CodeGG."}),o.jsxs("blockquote",{children:["“",a.review,"”"]}),o.jsx("p",{className:"ai-review-name",children:a.name}),o.jsxs("div",{className:"ai-review-ratings",children:[o.jsxs("span",{children:["Mentorship ",o.jsx(ri,{value:a.mentorship,label:"Mentorship"})]}),o.jsxs("span",{children:["Course content ",o.jsx(ri,{value:a.course,label:"Course content"})]})]})]},a.name)}),o.jsx("div",{className:"ai-review-dots","aria-label":"Choose a client review",children:$t.map((s,r)=>o.jsx("button",{type:"button",className:r===e?"is-active":"",onClick:()=>t(r),"aria-label":`Show review from ${s.name}`,"aria-current":r===e},s.name))})]}),o.jsx("div",{className:"ai-review-image","aria-label":`Portrait of ${a.name}`,children:o.jsx(Ct,{mode:"wait",initial:!1,children:o.jsx(At.figure,{variants:i,initial:"initial",animate:"animate",exit:"exit",transition:{duration:.42,ease:[.22,1,.36,1]},children:o.jsx("img",{src:a.image,alt:a.name})},a.image)})})]}),o.jsxs("p",{className:"ai-review-trust",children:[o.jsx("span",{"aria-hidden":"true"}),"Real people ",o.jsx("i",{children:"·"})," real experiences ",o.jsx("i",{children:"·"})," real reviews ",o.jsx("i",{children:"·"})," no stock portraits ",o.jsx("i",{children:"·"})," no fake reviews"]})]})}function tt({children:e,href:t,className:a="",target:n,rel:i}){return o.jsx(ga,{children:o.jsx("a",{href:t,className:a,target:n,rel:i,children:e})})}function gr(){const[e,t]=R.useState(()=>typeof window<"u"&&window.matchMedia("(max-width: 767px)").matches);return R.useEffect(()=>{const a=window.matchMedia("(max-width: 767px)"),n=()=>t(a.matches);return n(),a.addEventListener("change",n),()=>a.removeEventListener("change",n)},[]),e}function ga({children:e}){return gr()?o.jsx("span",{className:"ai-metal-fx",children:e}):o.jsx(Gi,{className:"ai-metal-fx",preset:"chromatic",theme:"dark",strength:.82,glowGain:.72,innerShadow:!0,children:e})}function Xt({children:e,onClick:t,className:a=""}){return o.jsx(ga,{children:o.jsxs("button",{onClick:t,className:`relative overflow-hidden rounded-full px-10 py-4 text-sm font-black tracking-wide text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] ${a}`,style:{background:"rgba(255,255,255,0.07)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,0.18)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)"},children:[o.jsx("span",{className:"relative z-10",children:e}),o.jsx("div",{className:"absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300",style:{background:"rgba(255,255,255,0.06)"}})]})})}const xr=()=>{const[e,t]=R.useState(!1),a=[{label:"Process",id:"ai-engineer"},{label:"Projects",id:"projects"},{label:"Outcomes",id:"outcomes"},{label:"FAQ",id:"faq"}];return o.jsxs(o.Fragment,{children:[o.jsx("button",{onClick:()=>t(!0),className:"w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 backdrop-blur-md active:scale-90 transition-transform",children:o.jsx(Qi,{className:"w-5 h-5 text-white/80"})}),e&&o.jsxs("div",{className:"fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex flex-col p-8 animate-in fade-in duration-300",children:[o.jsxs("div",{className:"flex justify-between items-center mb-12",children:[o.jsx("span",{className:"text-xl font-bold tracking-tight text-white italic",style:{fontFamily:"'Instrument Serif', serif"},children:"services menu"}),o.jsx("button",{onClick:()=>t(!1),className:"w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10",children:o.jsx(qi,{className:"w-6 h-6 text-white"})})]}),o.jsxs("div",{className:"flex flex-col gap-8 items-start justify-center flex-1",children:[a.map((n,i)=>o.jsxs("button",{onClick:()=>{t(!1);const s=document.getElementById(n.id);if(s){const r=document.querySelector("main");if(r){const c=s.offsetTop-80;r.scrollTo({top:c,behavior:"smooth"})}}},className:"text-4xl font-normal text-white tracking-tight flex items-baseline gap-4",style:{fontFamily:"'Instrument Serif', serif"},children:[o.jsxs("span",{className:"text-sm font-black text-white/20 tabular-nums",children:["0",i+1]}),n.label]},n.id)),o.jsx("button",{onClick:()=>{t(!1),window.location.href=Pe},className:"mt-8 w-full bg-white text-black py-5 rounded-2xl font-black text-sm tracking-widest uppercase",children:"SECURE YOUR SEAT"})]}),o.jsx("div",{className:"pt-8 border-t border-white/5 flex justify-center",children:o.jsx("p",{className:"text-white/20 text-[10px] font-bold uppercase tracking-[0.4em]",children:"Join the Team · Limited Slots"})})]})]})};function vr(){const e=R.useRef(null),[t,a]=R.useState(!1),[n,i]=R.useState(!0),[s,r]=R.useState(!1),[c,l]=R.useState(1),[d,u]=R.useState(0),[h,g]=R.useState(0),x=()=>{var m;i(!1),r(!0),(m=e.current)==null||m.play()},v=()=>{const m=e.current;m&&(m.paused?m.play():m.pause())},p=m=>{const f=e.current;f&&(f.playbackRate=m),l(m)},M=m=>{if(!Number.isFinite(m))return"0:00";const f=Math.floor(m/60),S=Math.floor(m%60).toString().padStart(2,"0");return`${f}:${S}`},k=m=>{const f=e.current;f&&(f.currentTime=m,u(m))};return o.jsxs("figure",{className:`ai-journey-artwork ai-journey-video ${s?"is-controls-visible":""}`,onClick:()=>{t?r(m=>!m):x()},role:"group","aria-label":"CodeGG 60-day learning journey video. Tap to play or show controls.",tabIndex:0,onKeyDown:m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),t?r(f=>!f):x())},children:[o.jsx("video",{ref:e,loop:!0,muted:n,playsInline:!0,preload:"metadata",onPlay:()=>a(!0),onPause:()=>a(!1),onLoadedMetadata:m=>g(m.currentTarget.duration),onTimeUpdate:m=>u(m.currentTarget.currentTime),children:o.jsx("source",{src:"/codegg-60-days.mp4",type:"video/mp4"})}),!t&&o.jsxs("button",{type:"button",className:"ai-journey-video-start",onClick:m=>{m.stopPropagation(),x()},children:[o.jsx(Yt,{"aria-hidden":"true",fill:"currentColor"}),o.jsx("span",{children:"Tap to play"})]}),o.jsxs("div",{className:"ai-journey-video-controls",onClick:m=>m.stopPropagation(),onMouseLeave:()=>{t&&r(!1)},children:[o.jsxs("div",{className:"ai-journey-video-timeline",children:[o.jsx("input",{type:"range",min:"0",max:Number.isFinite(h)?h:0,step:"0.1",value:Math.min(d,h||0),onChange:m=>k(Number(m.target.value)),"aria-label":"Video timeline"}),o.jsxs("span",{children:[M(d)," / ",M(h)]})]}),o.jsx("button",{type:"button",onClick:v,"aria-label":t?"Pause video":"Play video",children:t?o.jsx(si,{"aria-hidden":"true",fill:"currentColor"}):o.jsx(Yt,{"aria-hidden":"true",fill:"currentColor"})}),o.jsx("button",{type:"button",onClick:()=>i(m=>!m),"aria-label":n?"Turn sound on":"Turn sound off",children:n?o.jsx(ci,{"aria-hidden":"true"}):o.jsx(li,{"aria-hidden":"true"})}),o.jsxs("label",{className:"ai-journey-video-speed",children:[o.jsx("span",{children:"Speed"}),o.jsx("select",{value:c,onChange:m=>p(Number(m.target.value)),"aria-label":"Playback speed",children:[.75,1,1.25,1.5,2].map(m=>o.jsxs("option",{value:m,children:[m,"×"]},m))})]})]})]})}const Sr=()=>{const[e,t]=R.useState(0),[a,n]=R.useState(null),[i,s]=R.useState(0),[r,c]=R.useState(!1),[l,d]=R.useState(!0),[u,h]=R.useState(0),[g,x]=R.useState(0),[v,p]=R.useState(!1),[M,k]=R.useState(9/16),[m,f]=R.useState(1),S=R.useRef(null),w=$i(),I=pr(hr),U=et[e],P=_t[i];qt();const B=qt(),q=qt();R.useEffect(()=>{c(!1),d(!0),h(0),x(0),p(!1),k(9/16)},[P.video]);const D=()=>{const y=S.current;y&&(y.paused?y.play():y.pause())},V=y=>{const _=S.current,j=Number(y.target.value);_&&(_.currentTime=j,h(j))},C=y=>{f(y),s(_=>(_+y+_t.length)%_t.length)},G=y=>{if(!Number.isFinite(y))return"0:00";const _=Math.floor(y/60),j=Math.floor(y%60).toString().padStart(2,"0");return`${_}:${j}`};R.useEffect(()=>{var y;w.hash==="#ai-engineer"&&((y=document.getElementById("ai-engineer"))==null||y.scrollIntoView({behavior:"smooth"}))},[w]);const z=y=>String(y).padStart(2,"0");return o.jsxs(Xi,{hideVideo:!0,rightElement:o.jsx(xr,{}),children:[o.jsx("section",{className:"ai-infra-hero","aria-label":"Web Development Services introduction",children:o.jsxs("div",{className:"ai-infra-hero-inner",children:[o.jsxs("div",{className:"ai-infra-hero-copy",children:[o.jsx("p",{className:"ai-infra-hero-eyebrow",children:"CodeGG Web Development"}),o.jsxs("h1",{style:{fontFamily:"'Instrument Serif', serif"},"aria-label":"The team that turns your idea into shipped software.",children:["The team that turns your idea into ",o.jsx("span",{className:"ai-infra-crossed",children:"an idea"})," ",o.jsx("span",{className:"ai-infra-emphasis",children:"shipped software."})]})]}),o.jsx("div",{className:"ai-infra-hero-plate","aria-hidden":"true",children:o.jsx("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",children:o.jsx("source",{src:"https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260808_112712_da9d53df-6d27-4b12-bdf6-aa9dc2622bdf.mp4",type:"video/mp4"})})}),o.jsx("div",{className:"ai-infra-salary-marquee","aria-label":"Engineering salary outcomes",children:o.jsx("div",{className:"ai-infra-salary-track",children:[...ni,...ni].map((y,_)=>o.jsx("span",{children:y},`${y}-${_}`))})}),o.jsxs("div",{className:"ai-infra-hero-below",children:[o.jsx("p",{className:"ai-infra-hero-kicker",children:"A focused path from idea to launch"}),o.jsx("p",{className:"ai-infra-hero-statement",children:"Build, ship, and scale production-ready web, software, and mobile products with a senior engineering team."}),o.jsxs("div",{className:"ai-infra-hero-actions",children:[o.jsxs(tt,{href:Pe,className:"ai-infra-hero-primary",children:["Start your project ",o.jsx(ve,{className:"h-4 w-4"})]}),o.jsx(ga,{children:o.jsxs("button",{onClick:()=>{var y;return(y=document.getElementById("ai-engineer"))==null?void 0:y.scrollIntoView({behavior:"smooth"})},className:"ai-infra-hero-secondary",children:["Explore our process ",o.jsx(ve,{className:"h-4 w-4"})]})})]})]})]})}),o.jsx("section",{id:"ai-engineer",className:"ai-curriculum",children:o.jsxs("div",{className:"ai-curriculum-inner",children:[o.jsxs("div",{className:"ai-curriculum-heading",children:[o.jsx("p",{children:"Full Process"}),o.jsx("h2",{style:{fontFamily:"'Instrument Serif', serif"},children:"Ship Production Software in 60 Days"}),o.jsx("span",{children:"60 days of focused sprints, real deliverables, and a codebase you keep forever."})]}),o.jsxs("div",{className:"ai-module-navigator",children:[o.jsxs("article",{className:"ai-module-stage",children:[o.jsxs("div",{className:"ai-module-stage-top",children:[o.jsxs("span",{children:["Step ",U.id," of ",et.length]}),o.jsxs("div",{children:[o.jsx("button",{type:"button",title:"Previous step","aria-label":"Previous step",onClick:()=>t(y=>Math.max(0,y-1)),disabled:e===0,children:o.jsx(va,{})}),o.jsx("button",{type:"button",title:"Next step","aria-label":"Next step",onClick:()=>t(y=>Math.min(et.length-1,y+1)),disabled:e===et.length-1,children:o.jsx(ve,{})})]})]}),o.jsx("span",{className:"ai-module-stage-number",children:U.id}),o.jsx("h3",{style:{fontFamily:"'Instrument Serif', serif"},children:U.title}),o.jsx("p",{children:"We build this layer as a foundation, then carry it into the systems we ship together."}),o.jsx("div",{className:"ai-module-progress",children:o.jsx("i",{style:{width:`${(e+1)/et.length*100}%`}})})]}),o.jsxs("aside",{className:"ai-module-specification",children:[o.jsxs("div",{className:"ai-module-specification-title",children:[o.jsx("span",{children:"Step details"}),o.jsx("b",{children:"What we deliver"})]}),o.jsx("ol",{children:U.details.map((y,_)=>o.jsxs("li",{children:[o.jsx("span",{children:String(_+1).padStart(2,"0")}),o.jsx("p",{children:y}),o.jsx(ve,{"aria-hidden":"true"})]},y))}),o.jsxs("div",{className:"ai-module-spec-actions",children:[o.jsx(Xt,{onClick:()=>{const y=document.createElement("a");y.href="/codegg-services-overview.pdf",y.download="CodeGG_Services_Overview.pdf",y.click()},className:"bg-white/5",children:o.jsxs("span",{className:"flex items-center gap-2",children:["Download overview ",o.jsx(Yi,{className:"w-4 h-4"})]})}),o.jsx(Xt,{onClick:()=>window.location.href=Pe,children:o.jsxs("span",{className:"flex items-center gap-2",children:["Get started ",o.jsx(ve,{className:"w-4 h-4"})]})})]})]})]})]})}),o.jsx("section",{className:"ai-cohort-countdown","aria-label":"Project kickoff countdown",children:o.jsxs("div",{className:"ai-cohort-countdown-inner",children:[o.jsx("p",{className:"ai-cohort-countdown-eyebrow",children:"2 November 2026 Kickoff Starts In"}),o.jsx("div",{className:"ai-cohort-countdown-clock",children:[{value:z(I.days),label:"Days"},{value:z(I.hours),label:"Hours"},{value:z(I.minutes),label:"Min"},{value:z(I.seconds),label:"Sec"}].map(y=>o.jsxs("div",{children:[o.jsx("b",{children:y.value}),o.jsx("span",{children:y.label})]},y.label))}),o.jsxs("div",{className:"ai-cohort-countdown-facts",children:[o.jsxs("div",{children:[o.jsx("b",{children:"60"}),o.jsx("span",{children:"Days of focused sprints"})]}),o.jsxs("div",{children:[o.jsx("b",{children:"60+"}),o.jsx("span",{children:"Sprint sessions"})]}),o.jsxs("div",{children:[o.jsx("b",{children:"$2,500"}),o.jsx("span",{children:"Project investment"})]}),o.jsxs("div",{children:[o.jsx("b",{children:"LIVE"}),o.jsx("span",{children:"Documentation included"})]})]}),o.jsx("p",{className:"ai-cohort-countdown-note",children:"2 November 2026 · Limited Slots · Onboarding Soon"}),o.jsxs("div",{className:"ai-cohort-countdown-actions",children:[o.jsxs(tt,{href:Pe,children:["Start Your Project ",o.jsx(ve,{})]}),o.jsx(tt,{href:"https://wa.me/916301962520",className:"ai-cohort-mentor-link",target:"_blank",rel:"noopener noreferrer",children:"Talk to an Engineer"})]})]})}),o.jsx("section",{className:"ai-builder-cta","aria-labelledby":"builder-cta-title",children:o.jsxs("div",{className:`ai-builder-cta-inner ${q.visible?"is-visible":""}`,ref:q.ref,children:[o.jsx("p",{id:"builder-cta-title",className:"ai-builder-eyebrow",children:"Testimonials"}),o.jsx("div",{className:"ai-builder-dashboard","aria-labelledby":"builder-cta-title",children:o.jsx(Ct,{initial:!1,custom:m,children:o.jsx(At.div,{className:"ai-builder-story-slide",custom:m,variants:oi,initial:"initial",animate:"animate",exit:"exit",transition:{duration:.7,ease:"easeInOut"},children:o.jsxs("div",{className:`ai-builder-preview ${v?"is-controls-visible":""}`,style:{"--video-aspect-ratio":M},onClick:()=>p(y=>!y),onKeyDown:y=>{(y.key==="Enter"||y.key===" ")&&(y.preventDefault(),p(_=>!_))},role:"group","aria-label":"Testimonial video player. Tap to show or hide controls.",tabIndex:0,children:[q.visible&&o.jsx("video",{ref:S,src:P.video,autoPlay:!0,loop:!0,muted:!r,playsInline:!0,preload:"metadata",onLoadedMetadata:y=>{x(y.currentTarget.duration),y.currentTarget.videoWidth&&y.currentTarget.videoHeight&&k(y.currentTarget.videoWidth/y.currentTarget.videoHeight)},onTimeUpdate:y=>h(y.currentTarget.currentTime),onPlay:()=>d(!0),onPause:()=>d(!1)},P.video),o.jsxs("div",{className:"ai-builder-preview-nav",onClick:y=>y.stopPropagation(),children:[o.jsx("span",{children:"CodeGG"}),o.jsx("i",{children:"Live build"})]}),o.jsx("button",{type:"button",className:"ai-builder-video-center-toggle",onClick:y=>{y.stopPropagation(),D()},"aria-label":l?"Pause testimonial video":"Play testimonial video",title:l?"Pause video":"Play video",children:l?o.jsx(si,{"aria-hidden":"true"}):o.jsx(Yt,{"aria-hidden":"true"})}),!r&&o.jsx("span",{className:"ai-builder-audio-hint","aria-hidden":"true",children:"Click for audio"}),o.jsx("button",{type:"button",className:"ai-builder-preview-audio",onClick:y=>{y.stopPropagation(),c(_=>!_)},"aria-label":r?"Mute testimonial audio":"Play testimonial audio",title:r?"Mute audio":"Click for audio",children:r?o.jsx(li,{"aria-hidden":"true"}):o.jsx(ci,{"aria-hidden":"true"})}),o.jsx("div",{className:"ai-builder-video-controls","aria-label":"Testimonial video controls",onClick:y=>y.stopPropagation(),children:o.jsxs("div",{className:"ai-builder-video-seek",children:[o.jsx("input",{type:"range",min:"0",max:g||0,step:"0.1",value:Math.min(u,g||0),onChange:V,"aria-label":"Seek testimonial video"}),o.jsxs("span",{children:[G(u)," / ",G(g)]})]})})]})},P.video)})}),o.jsxs("div",{className:"ai-builder-controls","aria-label":"Browse client stories",children:[o.jsx(Ct,{initial:!1,custom:m,children:o.jsxs(At.div,{className:"ai-builder-active-review",custom:m,variants:oi,initial:"initial",animate:"animate",exit:"exit",transition:{duration:.62,ease:"easeInOut"},children:[o.jsxs("div",{children:[o.jsx("i",{children:P.name.split(" ").map(y=>y[0]).join("")}),o.jsxs("span",{children:[o.jsx("b",{children:P.name}),o.jsx("small",{children:P.after})]})]}),o.jsxs("p",{children:["“",P.quote,"”"]})]},P.video)}),o.jsxs("div",{className:"ai-builder-pagination",children:[o.jsx("button",{type:"button",onClick:()=>C(-1),"aria-label":"Previous client story",children:o.jsx(va,{})}),o.jsxs("span",{children:[String(i+1).padStart(2,"0")," / ",String(_t.length).padStart(2,"0")]}),o.jsx("button",{type:"button",onClick:()=>C(1),"aria-label":"Next client story",children:o.jsx(ve,{})})]})]})]})}),o.jsx(fr,{}),o.jsx("div",{className:"hidden","aria-hidden":"true",children:o.jsxs("div",{className:"max-w-[1400px] mx-auto",children:[o.jsx("p",{className:"text-center text-white/20 text-[9px] font-bold uppercase tracking-[0.5em] mb-10",children:"2 November 2026 Kickoff Starts In"}),o.jsx("div",{className:"flex items-end justify-center gap-0",children:[{val:z(I.days),label:"Days"},{val:z(I.hours),label:"Hours"},{val:z(I.minutes),label:"Min"},{val:z(I.seconds),label:"Sec"}].map((y,_)=>o.jsxs("div",{className:"flex items-end",children:[_>0&&o.jsx("span",{className:"text-white/10 select-none mx-3 sm:mx-5 mb-4",style:{fontFamily:"'Instrument Serif', serif",fontSize:"clamp(2rem, 7vw, 5rem)",lineHeight:1,fontWeight:400},children:"/"}),o.jsxs("div",{className:"flex flex-col items-center",children:[o.jsx("span",{className:"tabular-nums text-white leading-none",style:{fontFamily:"'Instrument Serif', serif",fontSize:"clamp(3.5rem, 12vw, 8rem)",letterSpacing:"-0.04em",lineHeight:1,fontWeight:400},children:y.val}),o.jsx("span",{className:"text-white/20 uppercase tracking-[0.3em] mt-3",style:{fontSize:"0.6rem",fontFamily:"'Inter', sans-serif"},children:y.label})]})]},_))}),o.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-px max-w-4xl mx-auto mt-12 border border-white/10 bg-white/10",children:[{value:"60",label:"Days of focused sprints"},{value:"60+",label:"Sprint sessions"},{value:"$2,500",label:"Project investment"},{value:"LIVE",label:"Documentation included"}].map(y=>o.jsxs("div",{className:"bg-[#050505] px-4 py-5 text-center",children:[o.jsx("b",{className:"block text-white text-2xl md:text-3xl font-normal leading-none",style:{fontFamily:"'Instrument Serif', serif"},children:y.value}),o.jsx("span",{className:"block mt-2 text-[9px] md:text-[10px] text-white/35 font-bold uppercase tracking-[0.15em] leading-relaxed",children:y.label})]},y.label))}),o.jsx("p",{className:"text-center text-white/15 text-[9px] font-bold uppercase tracking-[0.4em] mt-10 mb-10",children:"2 November 2026  ·  Limited Seats  ·  Applications Closing Soon"}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[o.jsx(Xt,{onClick:()=>window.location.href=Pe,children:"Start Your Project"}),o.jsx("a",{href:"https://wa.me/916301962520",target:"_blank",rel:"noopener noreferrer",className:"text-white/40 text-sm font-medium hover:text-white/70 transition-colors underline underline-offset-4",children:"Talk to an Engineer"})]})]})}),o.jsx("section",{id:"faq",className:"bg-[#050505] py-14 md:py-20 px-6 md:px-16 text-white relative z-20",children:o.jsxs("div",{className:"w-full md:w-[75%] max-w-[1000px] mx-auto",children:[o.jsx("span",{className:"text-white/30 text-xs font-bold uppercase tracking-[0.3em] mb-4 block",children:"Common Questions"}),o.jsx("h2",{className:"text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-10",style:{fontFamily:"'Instrument Serif', serif"},children:"Got Questions? We Got Answers."}),o.jsx("div",{className:"grid grid-cols-1 gap-3",children:mr.map((y,_)=>o.jsxs("div",{onClick:()=>n(a===_?null:_),className:`liquid-glass rounded-2xl p-5 md:p-6 transition-all duration-500 cursor-pointer border ${a===_?"border-white/20 bg-white/[0.04]":"border-white/5 hover:border-white/10"}`,children:[o.jsxs("div",{className:"flex items-center justify-between gap-4",children:[o.jsxs("h3",{className:"text-lg md:text-xl font-normal text-white flex items-center gap-4",style:{fontFamily:"'Instrument Serif', serif"},children:[o.jsxs("span",{className:"text-white/10 text-base font-black tabular-nums",children:["0",_+1]}),y.q]}),o.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center bg-white/5 transition-all duration-500 ${a===_?"rotate-[135deg] bg-white text-black":"text-white/30"}`,children:o.jsx(Ji,{className:"w-4 h-4"})})]}),o.jsx("div",{className:`grid transition-all duration-500 ease-in-out ${a===_?"grid-rows-[1fr] opacity-100 mt-5":"grid-rows-[0fr] opacity-0 mt-0"}`,children:o.jsx("div",{className:"overflow-hidden",children:o.jsx("p",{className:"whitespace-pre-line text-white/50 text-[14px] md:text-[16px] leading-relaxed md:ml-[3.5rem] max-w-2xl",children:y.a})})})]},_))})]})}),o.jsx("section",{className:"ai-closing",ref:B.ref,children:o.jsxs("div",{className:`ai-closing-inner transition-all duration-700 ${B.visible?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[o.jsxs("div",{className:"ai-closing-video",children:[B.visible&&o.jsx("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata","aria-hidden":"true",children:o.jsx("source",{src:"https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260819_212700_3bb9329b-5c50-4257-a09b-ca85cf3654a3.mp4",type:"video/mp4"})}),o.jsx("p",{className:"ai-closing-video-label",children:"CodeGG Web Development"}),o.jsx("h2",{className:"ai-closing-video-title",style:{fontFamily:"'Instrument Serif', serif"},children:"THE DOOR TO YOUR NEXT PRODUCT."}),o.jsxs("div",{className:"ai-closing-facts","aria-label":"Engagement details",children:[o.jsxs("div",{children:[o.jsx("b",{children:"2 Nov"}),o.jsx("span",{children:"Next intake begins"})]}),o.jsxs("div",{children:[o.jsx("b",{children:"60+"}),o.jsx("span",{children:"Sprint sessions"})]}),o.jsxs("div",{children:[o.jsx("b",{children:"$2,500"}),o.jsx("span",{children:"Project investment"})]})]})]}),o.jsx("div",{className:"ai-closing-actions",children:o.jsxs(tt,{href:Pe,children:["Start your build ",o.jsx(ve,{})]})}),o.jsx("p",{className:"ai-closing-note",children:"Weekly demos. Full documentation included."})]})})]})};export{Sr as default};
