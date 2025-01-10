
import { Injectable } from '@nestjs/common';
import { drive_v3, google } from 'googleapis';
import { GoogleOauth2Service } from '../google-oauth2/google-oauth2.service';

@Injectable()
export class GoogleDriveService {
  private driveClient: drive_v3.Drive;

  constructor(private readonly googleOauth2Service: GoogleOauth2Service) {
    const auth = this.googleOauth2Service.getAuthenticatedClient(); // Lấy client đã được xác thực
    this.driveClient = google.drive({ version: 'v3', auth });
  }

  /**
   * Upload file lên Google Drive
   * @param fileName Tên file
   * @param mimeType Loại file (ví dụ: 'image/jpeg', 'application/pdf')
   * @param fileContent Nội dung file (Buffer)
   * @returns ID của file sau khi upload
   */
  async uploadFile(fileName: string, mimeType: string, fileContent: Buffer): Promise<string> {
    const fileMetadata = {
      name: fileName,
    };

    const media = {
      mimeType,
      body: fileContent,
    };

    const response = await this.driveClient.files.create({
      requestBody: fileMetadata,
      media,
      fields: '1BrqleDDgbsRU-3kJ2YkSPbdstmNRpF5b',
    });

    return response.data.id; // Trả về ID của file
  }

  /**
   * Xóa file trên Google Drive
   * @param fileId ID của file cần xóa
   * @returns Thông báo thành công hoặc lỗi
   */
  async deleteFile(fileId: string): Promise<void> {
    await this.driveClient.files.delete({ fileId });
  }

  /**
   * Lấy danh sách file trên Google Drive
   * @returns Danh sách file
   */
  async listFiles(): Promise<drive_v3.Schema$File[]> {
    const response = await this.driveClient.files.list({
      pageSize: 10,
      fields: 'files(id, name)',
    });

    return response.data.files || [];
  }
}
