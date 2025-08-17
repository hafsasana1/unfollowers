import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CloudUpload, FileArchive, AlertCircle, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FileUploadProps {
  onFileUploaded?: (file: File) => void;
}

export function FileUpload({ onFileUploaded }: FileUploadProps) {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    
    if (!file) return;
    
    // Validate file type and size
    if (!file.name.endsWith('.zip')) {
      toast({
        title: "Invalid file type",
        description: "Please upload a ZIP file containing your Instagram data.",
        variant: "destructive",
      });
      return;
    }
    
    if (file.size > 50 * 1024 * 1024) { // 50MB limit
      toast({
        title: "File too large",
        description: "Please upload a file smaller than 50MB.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    setUploadProgress(0);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + 10;
      });
    }, 200);
    
    try {
      // Simulate file processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setUploadProgress(100);
      setUploadedFile(file);
      
      toast({
        title: "File uploaded successfully!",
        description: "Your Instagram data is being processed...",
      });
      
      if (onFileUploaded) {
        onFileUploaded(file);
      }
      
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error processing your file. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
      clearInterval(interval);
    }
  }, [onFileUploaded, toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/zip': ['.zip'],
    },
    multiple: false,
    maxSize: 50 * 1024 * 1024, // 50MB
  });

  return (
    <section className="py-20 bg-white" id="upload">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Upload Your Instagram Data</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simply upload your Instagram data ZIP file and we'll analyze your followers instantly. 
            Your data is processed locally and never stored on our servers.
          </p>
        </div>
        
        {!uploadedFile ? (
          <Card 
            {...getRootProps()}
            className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all hover:shadow-lg ${
              isDragActive 
                ? 'border-purple-400 bg-purple-50' 
                : 'border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50 hover:border-purple-400'
            }`}
          >
            <input {...getInputProps()} />
            <CardContent className="pt-0">
              <div className={`transition-transform ${isDragActive ? 'scale-105' : 'group-hover:scale-105'}`}>
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-purple-700 transition-colors">
                  <CloudUpload className="text-white" size={24} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {isDragActive ? 'Drop your file here' : 'Drop your Instagram ZIP file here'}
                </h3>
                <p className="text-gray-600 mb-6">or click to browse and select your file</p>
                
                <Button className="bg-purple-600 text-white hover:bg-purple-700 transition-colors font-medium">
                  Choose File
                </Button>
                
                <div className="mt-6 text-sm text-gray-500">
                  <p>Supported format: .zip (Instagram data export)</p>
                  <p>Maximum file size: 50MB</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="border border-green-200 bg-green-50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="text-green-600 mr-3" size={24} />
                <h3 className="text-lg font-semibold text-green-800">File Uploaded Successfully</h3>
              </div>
              <div className="flex items-center justify-center space-x-3 mb-4">
                <FileArchive className="text-green-600" size={20} />
                <span className="text-sm text-green-700">{uploadedFile.name}</span>
              </div>
              <p className="text-center text-green-600 text-sm">
                Your Instagram data has been processed. Check the results below!
              </p>
            </CardContent>
          </Card>
        )}
        
        {/* Progress Bar */}
        {isProcessing && (
          <div className="mt-8">
            <Progress value={uploadProgress} className="h-2" />
            <p className="text-center text-sm text-gray-600 mt-2">
              Processing your data... {uploadProgress}%
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
