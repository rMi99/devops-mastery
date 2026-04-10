import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

// ⚠️ Hardcoded credentials (NOT recommended for production | 
//  ⚠️⚠️⚠️⚠️ dont push with your credentials to the repo ⚠️⚠️⚠️⚠️
const s3 = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: "YOUR_ACCESS_KEY_ID",
    secretAccessKey: "YOUR_SECRET_ACCESS_KEY",
  },
});

async function listFiles() {
  try {
    const response = await s3.send(
      new ListObjectsV2Command({
        Bucket: "epic-learn",
      })
    );

    if (!response.Contents) {
      console.log("No files found");
      return;
    }

    response.Contents.forEach((file) => {
      console.log("File:", file.Key);
    });

  } catch (error) {
    console.error("Error:", error);
  }
}

listFiles();