Feature: Testing Twitter Feed

alias pbackup="pstop && zip $PLATFORM_HOME/data.zip -r $PLATFORM_HOME/data" - Taking a backup of the data
alias prestore="rm -rf $PLATFORM_HOME/data && pstop && pushd / && unzip -u $PLATFORM_HOME/data.zip && popd" - Restore from the backup