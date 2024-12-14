module.exports = {
  apps: [
    {
      name: "test-deploy",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      cwd: "./",
      instances: "max",
      exec_mode: "cluster",
      out_file: "/dev/stdout",
      error_file: "/dev/stderr",
    },
  ],
};
