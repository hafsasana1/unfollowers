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
    <section className="py-10 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50" id="upload">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Track Your Instagram Unfollowers Now</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Upload your Instagram data export and discover who unfollowed you in seconds. 
            100% secure, no login required, completely free.
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>✓ No login required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>✓ 100% secure & private</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>✓ Results in under 10 seconds</span>
            </div>
          </div>
        </div>
        
        {!uploadedFile ? (
          <Card 
            {...getRootProps()}
            className={`border-3 border-dashed rounded-3xl p-16 text-center cursor-pointer transition-all hover:shadow-2xl transform hover:scale-[1.02] ${
              isDragActive 
                ? 'border-purple-500 bg-purple-100 shadow-2xl scale-[1.02]' 
                : 'border-purple-400 bg-gradient-to-br from-white via-purple-50 to-pink-50 hover:border-purple-500'
            }`}
            data-testid="upload-dropzone"
          >
            <input {...getInputProps()} />
            <CardContent className="pt-0">
              <div className={`transition-transform ${isDragActive ? 'scale-110' : 'hover:scale-105'}`}>
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-8 hover:from-purple-700 hover:to-pink-700 transition-all shadow-xl">
                  <CloudUpload className="text-white" size={32} />
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {isDragActive ? 'Drop Your File Here!' : 'Drag & Drop Your Instagram Data'}
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                  Drop your Instagram ZIP file here or click the button below to browse your files
                </p>
                
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all font-bold text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105"
                  data-testid="button-choose-file"
                >
                  <FileArchive className="mr-3" size={20} />
                  Choose Your ZIP File
                </Button>
                
                <div className="mt-8 bg-gray-50 rounded-xl p-6 space-y-3">
                  <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="font-medium">ZIP format only</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="font-medium">Max 50MB</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="font-medium">Instant results</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 text-center">
                    Need help? <button 
                      onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-purple-600 hover:text-purple-700 font-medium underline"
                    >
                      Learn how to download your Instagram data
                    </button>
                  </div>
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
