//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

namespace egret.sys {

    //
    export class ParticleRenderer extends ObjectRenderer {
   
        constructor() {
            super();
            console.log('ParticleRenderer constructor');
        }

        public onPrerender(): void {
            console.log('ParticleRenderer onPrerender');
        }

        public start(): void {
            console.log('ParticleRenderer start');
        }

        public stop(): void {
            console.log('ParticleRenderer stop');
            this.flush();
        }

        public flush(): void {
            console.log('ParticleRenderer flush');
        }

        public render(renderNode: RenderNode): void {
            console.log('ParticleRenderer render = ' + renderNode);
        }

        public contextChange(gl: WebGLRenderingContext): void {
            console.log('ParticleRenderer contextChange = ' + gl);
        }

        public destroy(): void {
            console.log('ParticleRenderer destroy');
        }
    }

    /**
     * @private
     * 粒子渲染节点
     */
    export class ParticleNode extends RenderNode {

        public constructor() {
            super();
            this.type = RenderNodeType.ParticleNode;
            this.renderCount = 1;
        }
        /**
         * 要绘制的位图
         */
        public image: BitmapData = null;
        /**
         * 顶点坐标。
         */
        public vertices: Float32Array;
        /**
         * 使用的混合模式
         */
        public blendMode: number = null;
        /**
         * 粒子绘制数量
         */
        public numParticles: number = null;
        /**
         * 粒子属性数量
         */
        public numProperties: number = null;

        /**
         * 在显示对象的$updateRenderNode()方法被调用前，自动清空自身的drawData数据。
         */
        public cleanBeforeRender(): void {
            
        }
    }
}