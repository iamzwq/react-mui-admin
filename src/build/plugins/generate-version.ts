import type { Plugin } from "vite";

export default function generateVersion(): Plugin {
  // let config: any;
  return {
    name: "generate-version",
    apply: "build",
    // configResolved(resolvedConfig: any) {
    //   config = resolvedConfig;
    // },
    generateBundle() {
      // 有的项目是通过 Dockerfile 的方式来将 git_commit id 注入到环境变量中
      // 可以通过约定好的环境变量名 config.env.VITE_ 这种方式来获取配置
      // { version: config.env.VITE_APP_VERSION }

      this.emitFile({
        type: "asset",
        fileName: "version.json",
        source: JSON.stringify({ version: Date.now() }),
      });
    },
  };
}
