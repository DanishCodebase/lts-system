import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const IndividualCandidate = ({ candidate }) => {
  const [interviewDate, setInterviewDate] = useState("");
  const [interviewTime, setInterviewTime] = useState("");
  const [interviewLevel, setInterviewLevel] = useState("");
  const [rejectReason, setRejectReason] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleScheduleInterview = () => {
    console.log("Interview scheduled:", {
      interviewDate,
      interviewTime,
      interviewLevel,
    });
    // Add your logic here to handle the interview scheduling
  };

  console.log(candidate);

  const handleReject = () => {
    console.log("Candidate rejected:", { rejectReason });
    // Add your logic here to handle the rejection
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="bg-indigo-500 hover:bg-indigo-400">
          View Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[475px] candidate-dialog bg-transparent border-0">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{candidate.name}</CardTitle>
            <p className="text-sm text-muted-foreground">
            {candidate.currentPosition}
            </p>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <p className="font-medium">Mobile No.</p>
              <p>{candidate.phone}</p>
              <p className="font-medium">Email ID</p>
              <p>{candidate.email}</p>
              <p className="font-medium">Total Yrs Exp</p>
              <p>{candidate.experience}</p>
              <p className="font-medium">Relevent Yrs Exp</p>
              <p>{candidate.relevant_experience}</p>
              <p className="font-medium">Rate Card</p>
              <p>{candidate.rate_card}</p>
              <p className="font-medium">Notice Period</p>
              <p>{candidate.notice_period}</p>
              <p className="font-medium">Client</p>
              <p>TS</p>
              <p className="font-medium">Skill Name</p>
              <p>PHP DEVELOPER</p>
              <p className="font-medium">Status</p>
              <p>-</p>
              <p className="font-medium">Remark/Interview</p>
              <p>-</p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto">
                Add to top Profile
              </Button>
              <Button variant="default" className="w-full sm:w-auto">
                Mark Selected
              </Button>
            </div>
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="default" className="w-full sm:w-auto">
                    Schedule for Interview
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <h4 className="font-medium leading-none">
                      Schedule Interview
                    </h4>
                    <div className="grid gap-2">
                      <Label htmlFor="interview-date">Date</Label>
                      <Input
                        id="interview-date"
                        type="date"
                        value={interviewDate}
                        onChange={(e) => setInterviewDate(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="interview-time">Time</Label>
                      <Input
                        id="interview-time"
                        type="time"
                        value={interviewTime}
                        onChange={(e) => setInterviewTime(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="level2">Level</Label>
                      <Input
                        id="level2"
                        placeholder="Enter interview level"
                        value={interviewLevel}
                        onChange={(e) => setInterviewLevel(e.target.value)}
                      />
                    </div>
                    <Button onClick={handleScheduleInterview}>Confirm</Button>
                  </div>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="destructive" className="w-full sm:w-auto">
                    Mark Rejected
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <h4 className="font-medium leading-none">
                      Confirm Rejection
                    </h4>
                    <div className="grid gap-2">
                      <Label htmlFor="remark">Add Remark</Label>
                      <Input
                        id="remark"
                        placeholder="Enter rejection reason"
                        value={rejectReason}
                        onChange={(e) => setRejectReason(e.target.value)}
                      />
                    </div>
                    <Button variant="destructive" onClick={handleReject}>
                      Confirm Rejection
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default IndividualCandidate;
