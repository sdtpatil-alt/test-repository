for i in {1..10}
do
   echo "Commit number $i" >> sync-test.log
   git add sync-test.log
   git commit -m "Test commit $i: Verifying Many-to-One sync logic"
   
   # Option A: Push every time (Stress test the webhook)
   git push
   
   # Optional: sleep for 1 second if you want to avoid hitting 
   # GitHub's secondary rate limits during the test
   # sleep 1
done